import express from 'express';
import {
  createReportController,
  getAllReportsController,
  getReportByIdController,
  updateReportController,
  deleteReportController
} from '../controllers/reportController.js';
import { authorizeRoles, isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// Protected routes
router.get('/', isAuthenticate, getAllReportsController);
router.get('/:id', isAuthenticate, getReportByIdController);

// Operator, manager and admin routes
router.post('/', isAuthenticate, createReportController);
router.route('/:id')
  .put(isAuthenticate, updateReportController)
  .delete(isAuthenticate, authorizeRoles('admin', 'manager'), deleteReportController);

export default router;