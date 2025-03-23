import express from 'express';
import {
  createMissionController,
  getAllMissionsController,
  getMissionByIdController,
  updateMissionController,
  deleteMissionController,
  updateMissionStatusController
} from '../controllers/missionController.js';
import { authorizeRoles, isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes
router.get('/', isAuthenticate, getAllMissionsController);
router.get('/:id', isAuthenticate, getMissionByIdController);

// Status update route (used by drone simulators)
router.patch('/:id/status', isAuthenticate, updateMissionStatusController);

// Operator, manager and admin routes
router.post('/', isAuthenticate, createMissionController);
router.route('/:id')
  .put(isAuthenticate, updateMissionController)
  .delete(isAuthenticate, authorizeRoles('admin', 'manager'), deleteMissionController);

export default router;