import express from 'express';
import {
  createFacilityController,
  getAllFacilitiesController,
  getFacilityByIdController,
  updateFacilityController,
  deleteFacilityController
} from '../controllers/facilityController.js';
import { authorizeRoles, isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes
router.get('/', isAuthenticate, getAllFacilitiesController);
router.get('/:id', isAuthenticate, getFacilityByIdController);

// Manager and admin routes
router.post('/', isAuthenticate, authorizeRoles('admin', 'manager'), createFacilityController);
router.route('/:id')
  .put(isAuthenticate, authorizeRoles('admin', 'manager'), updateFacilityController)
  .delete(isAuthenticate, authorizeRoles('admin', 'manager'), deleteFacilityController);

export default router;