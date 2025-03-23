import {
    createMission,
    getAllMissions,
    getMissionById,
    updateMission,
    deleteMission,
    updateMissionStatus
  } from '../service/missionService.js';
  import {catchError} from '../middlewares/chatchError.js';
  
  // Create new mission
  export const createMissionController = catchError(async (req, res, next) => {
    const mission = await createMission(req.body, req.user._id);
    
    res.status(201).json({
      success: true,
      mission
    });
  });
  
  // Get all missions
  export const getAllMissionsController = catchError(async (req, res, next) => {
    const { organization, facility, drone, status } = req.query;
    
    const filters = {};
    if (organization) filters.organization = organization;
    if (facility) filters.facility = facility;
    if (drone) filters.drone = drone;
    if (status) filters.status = status;
    
    const missions = await getAllMissions(filters);
    
    res.status(200).json({
      success: true,
      count: missions.length,
      missions
    });
  });
  
  // Get mission by ID
  export const getMissionByIdController = catchError(async (req, res, next) => {
    const mission = await getMissionById(req.params.id);
    
    res.status(200).json({
      success: true,
      mission
    });
  });
  
  // Update mission
  export const updateMissionController = catchError(async (req, res, next) => {
    const mission = await updateMission(req.params.id, req.body);
    
    res.status(200).json({
      success: true,
      mission
    });
  });
  
  // Delete mission
  export const deleteMissionController = catchError(async (req, res, next) => {
    await deleteMission(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Mission deleted successfully'
    });
  });
  
  // Update mission status (for real-time updates)
  export const updateMissionStatusController = catchError(async (req, res, next) => {
    const { status, progress, statistics } = req.body;
    
    const mission = await updateMissionStatus(req.params.id, status, progress, statistics);
    
    // Emit the updated mission status via socket.io
    const io = req.app.get('io');
    io.to(`mission-${req.params.id}`).emit('mission-update', mission);
    
    res.status(200).json({
      success: true,
      mission
    });
  });