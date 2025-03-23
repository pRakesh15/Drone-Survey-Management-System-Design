import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateProfile,
  getAllUsersController,
  getUserDetailsController,
  updateUserRole,
  deleteUserController
} from '../controllers/userController.js';
import { authorizeRoles, isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/me', isAuthenticate, getUserProfile);
router.put('/me/update', isAuthenticate, updateProfile);
router.get('/logout', isAuthenticate, logoutUser);

 
// Admin routes
router.get('/admin/users', isAuthenticate, authorizeRoles('admin'), getAllUsersController);
router.route('/admin/user/:id')
  .get(isAuthenticate, authorizeRoles('admin'), getUserDetailsController)
  .put(isAuthenticate, authorizeRoles('admin'), updateUserRole)
  .delete(isAuthenticate, authorizeRoles('admin'), deleteUserController);

export default router;