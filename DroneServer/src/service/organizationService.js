import {Organization} from '../models/organizationModel.js';
import ErrorHendler from '../utils/errorHendler.js';

// Create organization
export const createOrganization = async (organizationData) => {
  return await Organization.create(organizationData);
};

// Get all organizations
export const getAllOrganizations = async () => {
  return await Organization.find();
};

// Get organization by ID
export const getOrganizationById = async (organizationId) => {
  const organization = await Organization.findById(organizationId);
  
  if (!organization) {
    throw new ErrorHendler('Organization not found', 404);
  }
  
  return organization;
};

// Update organization
export const updateOrganization = async (organizationId, organizationData) => {
  let organization = await Organization.findById(organizationId);
  
  if (!organization) {
    throw new ErrorHendler('Organization not found', 404);
  }
  
  organization = await Organization.findByIdAndUpdate(organizationId, organizationData, {
    new: true,
    runValidators: true
  });
  
  return organization;
};

// Delete organization
export const deleteOrganization = async (organizationId) => {
  const organization = await Organization.findById(organizationId);
  
  if (!organization) {
    throw new ErrorHendler('Organization not found', 404);
  }
  
  await organization.remove();
  return true;
};