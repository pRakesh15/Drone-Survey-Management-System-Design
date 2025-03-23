import {
    createUser,
    authenticateUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
  } from '../service/userService.js';
  import {catchError} from '../middlewares/chatchError.js';
import { sendToken } from '../utils/sendToken.js';
  
  // Register a new user
  export const registerUser = catchError(async (req, res, next) => {
    const user = await createUser(req.body);
    
    const token = sendToken(res, user, "Register successfully", 201);
    
  });
  
  // Login user
  export const loginUser = catchError(async (req, res, next) => {
    const { email, password } = req.body;
    
    const user = await authenticateUser(email, password);
    const token = sendToken(user._id);
    
  });
  
  // Logout user
  export const logoutUser = catchError(async (req, res, next) => {
    res.cookie('token', null, {
      expires: new Date(Date.now()),
      httpOnly: true
    }).json({
      success: true,
      message: 'Logged out successfully'
    });
  });
  
  // Get user profile
  export const getUserProfile = catchError(async (req, res, next) => {
    const user = await getUserById(req.user._id);
    
    res.status(200).json({
      success: true,
      user
    });
  });
  
  // Update user profile
  //actually am not going to impliment the things
  export const updateProfile = catchError(async (req, res, next) => {
    const userData = {
      name: req.body.name,
      email: req.body.email
    };
    
    const user = await updateUser(req.user._id, userData);
    
    res.status(200).json({
      success: true,
      user
    });
  });
  
  // Get all users (Admin only)
  export const getAllUsersController = catchError(async (req, res, next) => {
    const users = await getAllUsers();
    
    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  });
  
  // Get user details by ID (Admin only)
  export const getUserDetailsController = catchError(async (req, res, next) => {
    const user = await getUserById(req.params.id);
    
    res.status(200).json({
      success: true,
      user
    });
  });
  
  // Update user role (Admin only)
  export const updateUserRole = catchError(async (req, res, next) => {
    const userData = {
      role: req.body.role,
      organization: req.body.organization
    };
    
    await updateUser(req.params.id, userData);
    
    res.status(200).json({
      success: true,
      message: 'User updated successfully'
    });
  });
  
  // Delete user (Admin only)
  export const deleteUserController = catchError(async (req, res, next) => {
    await deleteUser(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  });