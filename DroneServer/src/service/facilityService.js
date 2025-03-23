import {Facility} from '../models/facilityModel.js';
import ErrorHendler from '../utils/errorHendler.js';

// Create facility
export const createFacility = async (facilityData) => {
  return await Facility.create(facilityData);
};

// Get all facilities
export const getAllFacilities = async (organizationId) => {
  const query = organizationId ? { organization: organizationId } : {};
  return await Facility.find(query).populate('organization');
};

// Get facility by ID
export const getFacilityById = async (facilityId) => {
  const facility = await Facility.findById(facilityId).populate('organization');
  
  if (!facility) {
    throw new ErrorHendler('Facility not found', 404);
  }
  
  return facility;
};

// Update facility
export const updateFacility = async (facilityId, facilityData) => {
  let facility = await Facility.findById(facilityId);
  
  if (!facility) {
    throw new ErrorHendler('Facility not found', 404);
  }
  
  facility = await Facility.findByIdAndUpdate(facilityId, facilityData, {
    new: true,
    runValidators: true
  }).populate('organization');
  
  return facility;
};

// Delete facility
export const deleteFacility = async (facilityId) => {
  const facility = await Facility.findById(facilityId);
  
  if (!facility) {
    throw new ErrorHendler('Facility not found', 404);
  }
  
  await facility.remove();
  return true;
};