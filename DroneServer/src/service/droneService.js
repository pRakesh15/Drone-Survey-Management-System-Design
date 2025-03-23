import {Drone} from '../models/droneModel.js';
import ErrorHendler from '../utils/errorHendler.js';

// Create drone
export const createDrone = async (droneData) => {
  return await Drone.create(droneData);
};

// Get all drones
export const getAllDrones = async (filters = {}) => {
  return await Drone.find(filters)
    .populate('organization')
    .populate('facility');
};

// Get drone by ID
export const getDroneById = async (droneId) => {
  const drone = await Drone.findById(droneId)
    .populate('organization')
    .populate('facility');
  
  if (!drone) {
    throw new ErrorHendler('Drone not found', 404);
  }
  
  return drone;
};

// Update drone
export const updateDrone = async (droneId, droneData) => {
  let drone = await Drone.findById(droneId);
  
  if (!drone) {
    throw new ErrorHendler('Drone not found', 404);
  }
  
  drone = await Drone.findByIdAndUpdate(droneId, droneData, {
    new: true,
    runValidators: true
  })
    .populate('organization')
    .populate('facility');
  
  return drone;
};

// Delete drone
export const deleteDrone = async (droneId) => {
  const drone = await Drone.findById(droneId);
  
  if (!drone) {
    throw new ErrorHendler('Drone not found', 404);
  }
  
  await drone.remove();
  return true;
};

// Update drone's current location and battery level
export const updateDroneStatus = async (droneId, statusData) => {
  const { latitude, longitude, altitude, batteryLevel } = statusData;
  
  const updateData = {};
  
  if (latitude !== undefined && longitude !== undefined) {
    updateData['currentLocation.latitude'] = latitude;
    updateData['currentLocation.longitude'] = longitude;
    updateData['currentLocation.lastUpdated'] = new Date();
  }
  
  if (altitude !== undefined) {
    updateData['currentLocation.altitude'] = altitude;
  }
  
  if (batteryLevel !== undefined) {
    updateData.batteryLevel = batteryLevel;
  }
  
  if (Object.keys(updateData).length === 0) {
    return await getDroneById(droneId);
  }
  
  const drone = await Drone.findByIdAndUpdate(droneId, updateData, {
    new: true,
    runValidators: true
  })
    .populate('organization')
    .populate('facility');
  
  return drone;
};