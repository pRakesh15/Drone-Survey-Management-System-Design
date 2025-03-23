import express from 'express';
import {
  createOrganizationController,
  getAllOrganizationsController,
  getOrganizationByIdController,
  updateOrganizationController,
  deleteOrganizationController
} from '../controllers/organizationController.js';
import { authorizeRoles, isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes
router.get('/', isAuthenticate, getAllOrganizationsController);
router.get('/:id', isAuthenticate, getOrganizationByIdController);

// Admin routes
router.post('/', isAuthenticate, authorizeRoles('admin'), createOrganizationController);
router.route('/:id')
  .put(isAuthenticate, authorizeRoles('admin'), updateOrganizationController)
  .delete(isAuthenticate, authorizeRoles('admin'), deleteOrganizationController);

export default router;