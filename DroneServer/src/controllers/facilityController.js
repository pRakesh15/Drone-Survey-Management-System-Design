import {
    createFacility,
    getAllFacilities,
    getFacilityById,
    updateFacility,
    deleteFacility
  } from '../service/facilityService.js';
  import {catchError} from '../middlewares/chatchError.js';
  
  // Create new facility
  export const createFacilityController = catchError(async (req, res, next) => {
    const facility = await createFacility(req.body);
    
    res.status(201).json({
      success: true,
      facility
    });
  });
  
  // Get all facilities
  export const getAllFacilitiesController = catchError(async (req, res, next) => {
    const { organization } = req.query;
    const facilities = await getAllFacilities(organization);
    
    res.status(200).json({
      success: true,
      count: facilities.length,
      facilities
    });
  });
  
  // Get facility by ID
  export const getFacilityByIdController = catchError(async (req, res, next) => {
    const facility = await getFacilityById(req.params.id);
    
    res.status(200).json({
      success: true,
      facility
    });
  });
  
  // Update facility
  export const updateFacilityController = catchError(async (req, res, next) => {
    const facility = await updateFacility(req.params.id, req.body);
    
    res.status(200).json({
      success: true,
      facility
    });
  });
  
  // Delete facility
  export const deleteFacilityController = catchError(async (req, res, next) => {
    await deleteFacility(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Facility deleted successfully'
    });
  });