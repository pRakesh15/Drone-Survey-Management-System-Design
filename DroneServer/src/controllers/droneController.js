import {
    createDrone,
    getAllDrones,
    getDroneById,
    updateDrone,
    deleteDrone,
    updateDroneStatus
  } from '../service/droneService.js';
  import {catchError} from '../middlewares/chatchError.js';
  
  // Create new drone
  export const createDroneController = catchError(async (req, res, next) => {
    const drone = await createDrone(req.body);
    
    res.status(201).json({
      success: true,
      drone
    });
  });
  
  // Get all drones
  export const getAllDronesController = catchError(async (req, res, next) => {
    const { organization, facility, status } = req.query;
    
    const filters = {};
    if (organization) filters.organization = organization;
    if (facility) filters.facility = facility;
    if (status) filters.status = status;
    
    const drones = await getAllDrones(filters);
    
    res.status(200).json({
      success: true,
      count: drones.length,
      drones
    });
  });
  
  // Get drone by ID
  export const getDroneByIdController = catchError(async (req, res, next) => {
    const drone = await getDroneById(req.params.id);
    
    res.status(200).json({
      success: true,
      drone
    });
  });
  
  // Update drone
  export const updateDroneController = catchError(async (req, res, next) => {
    const drone = await updateDrone(req.params.id, req.body);
    
    res.status(200).json({
      success: true,
      drone
    });
  });
  
  // Delete drone
  export const deleteDroneController = catchError(async (req, res, next) => {
    await deleteDrone(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Drone deleted successfully'
    });
  });
  
  // Update drone status (for real-time updates)
  export const updateDroneStatusController = catchError(async (req, res, next) => {
    const drone = await updateDroneStatus(req.params.id, req.body);
    
    // Emit the updated drone status via socket.io
    const io = req.app.get('io');
    io.emit('drone-update', drone);
    
    res.status(200).json({
      success: true,
      drone
    });
  });