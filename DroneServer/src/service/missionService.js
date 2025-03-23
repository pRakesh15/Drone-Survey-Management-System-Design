import {Mission} from '../models/missionModel.js';
import {Drone} from '../models/droneModel.js';
import ErrorHendler from '../utils/errorHendler.js';

// Create mission
export const createMission = async (missionData, userId) => {
  const { drone: droneId } = missionData;
  
  // Check if drone is available
  const drone = await Drone.findById(droneId);
  
  if (!drone) {
    throw new ErrorHendler('Drone not found', 404);
  }
  
  if (drone.status !== 'available') {
    throw new ErrorHendler('Drone is not available for mission', 400);
  }
  
  // Create the mission
  const mission = await Mission.create({
    ...missionData,
    createdBy: userId
  });
  
  // Update drone status to 'in-mission'
  await Drone.findByIdAndUpdate(droneId, { status: 'in-mission' });
  
  return await Mission.findById(mission._id)
    .populate('organization')
    .populate('facility')
    .populate('drone')
    .populate('createdBy', '-password');
};

// Get all missions
export const getAllMissions = async (filters = {}) => {
  return await Mission.find(filters)
    .populate('organization')
    .populate('facility')
    .populate('drone')
    .populate('createdBy', '-password');
};

// Get mission by ID
export const getMissionById = async (missionId) => {
  const mission = await Mission.findById(missionId)
    .populate('organization')
    .populate('facility')
    .populate('drone')
    .populate('createdBy', '-password');
  
  if (!mission) {
    throw new ErrorHendler('Mission not found', 404);
  }
  
  return mission;
};

// Update mission
export const updateMission = async (missionId, missionData) => {
  let mission = await Mission.findById(missionId);
  
  if (!mission) {
    throw new ErrorHendler('Mission not found', 404);
  }
  
  // Don't allow changing the drone if mission has started
  if (missionData.drone && mission.status !== 'scheduled' && mission.drone.toString() !== missionData.drone) {
    throw new ErrorHendler('Cannot change drone once mission has started', 400);
  }
  
  mission = await Mission.findByIdAndUpdate(missionId, missionData, {
    new: true,
    runValidators: true
  })
    .populate('organization')
    .populate('facility')
    .populate('drone')
    .populate('createdBy', '-password');
  
  return mission;
};

// Delete mission
export const deleteMission = async (missionId) => {
  const mission = await Mission.findById(missionId);
  
  if (!mission) {
    throw new ErrorHendler('Mission not found', 404);
  }
  
  // If mission is in progress, don't allow deletion
  if (mission.status === 'in-progress') {
    throw new ErrorHendler('Cannot delete mission in progress', 400);
  }
  
  // If mission is scheduled, make drone available again
  if (mission.status === 'scheduled') {
    await Drone.findByIdAndUpdate(mission.drone, { status: 'available' });
  }
  
  await mission.remove();
  return true;
};

// Update mission status
export const updateMissionStatus = async (missionId, status, progress = {}, statistics = {}) => {
  const mission = await Mission.findById(missionId);
  
  if (!mission) {
    throw new ErrorHendler('Mission not found', 404);
  }
  
  const updateData = { status };
  
  // Update progress if provided
  if (Object.keys(progress).length > 0) {
    updateData.progress = {
      ...mission.progress,
      ...progress
    };
  }
  
  // Update statistics if provided
  if (Object.keys(statistics).length > 0) {
    updateData.statistics = {
      ...mission.statistics,
      ...statistics
    };
  }
  
  // Handle drone status change based on mission status
  if (status === 'completed' || status === 'aborted') {
    await Drone.findByIdAndUpdate(mission.drone, { status: 'available' });
    
    // Set end time if completing or aborting
    if (!updateData.statistics) {
      updateData.statistics = {};
    }
    updateData.statistics.endTime = new Date();
    
    // Calculate duration if we have start time
    if (mission.statistics && mission.statistics.startTime) {
      const durationMs = new Date() - new Date(mission.statistics.startTime);
      updateData.statistics.duration = Math.floor(durationMs / 1000); // Duration in seconds
    }
  } else if (status === 'in-progress' && mission.status === 'scheduled') {
    // If starting mission, update start time
    if (!updateData.statistics) {
      updateData.statistics = {};
    }
    updateData.statistics.startTime = new Date();
  }
  
  const updatedMission = await Mission.findByIdAndUpdate(missionId, updateData, {
    new: true,
    runValidators: true
  })
    .populate('organization')
    .populate('facility')
    .populate('drone')
    .populate('createdBy', '-password');
  
  return updatedMission;
};