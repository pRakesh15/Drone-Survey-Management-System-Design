import {
    createOrganization,
    getAllOrganizations,
    getOrganizationById,
    updateOrganization,
    deleteOrganization
  } from '../service/organizationService.js';
  import {catchError} from '../middlewares/chatchError.js';
  
  // Create new organization (Admin only)
  export const createOrganizationController = catchError(async (req, res, next) => {
    const organization = await createOrganization(req.body);
    
    res.status(201).json({
      success: true,
      organization
    });
  });
  
  // Get all organizations
  export const getAllOrganizationsController = catchError(async (req, res, next) => {
    const organizations = await getAllOrganizations();
    
    res.status(200).json({
      success: true,
      count: organizations.length,
      organizations
    });
  });
  
  // Get organization by ID
  export const getOrganizationByIdController = catchError(async (req, res, next) => {
    const organization = await getOrganizationById(req.params.id);
    
    res.status(200).json({
      success: true,
      organization
    });
  });
  
  // Update organization (Admin only)
  export const updateOrganizationController = catchError(async (req, res, next) => {
    const organization = await updateOrganization(req.params.id, req.body);
    
    res.status(200).json({
      success: true,
      organization
    });
  });
  
  // Delete organization (Admin only)
  export const deleteOrganizationController = catchError(async (req, res, next) => {
    await deleteOrganization(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Organization deleted successfully'
    });
  });