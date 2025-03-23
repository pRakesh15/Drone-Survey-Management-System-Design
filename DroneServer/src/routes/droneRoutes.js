import express from 'express';
import {
  createDroneController,
  getAllDronesController,
  getDroneByIdController,
  updateDroneController,
  deleteDroneController,
  updateDroneStatusController
} from '../controllers/droneController.js';
import { authorizeRoles, isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes
router.get('/', isAuthenticate, getAllDronesController);
router.get('/:id', isAuthenticate, getDroneByIdController);

// Status update route (used by drone simulators)
router.patch('/:id/status', isAuthenticate, updateDroneStatusController);

// Manager and admin routes
router.post('/', isAuthenticate, authorizeRoles('admin', 'manager'), createDroneController);
router.route('/:id')
  .put(isAuthenticate, authorizeRoles('admin', 'manager'), updateDroneController)
  .delete(isAuthenticate, authorizeRoles('admin', 'manager'), deleteDroneController);

export default router;