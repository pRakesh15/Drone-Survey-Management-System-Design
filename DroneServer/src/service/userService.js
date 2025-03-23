import { User } from "../models/userModel.js";
import ErrorHendler from "../utils/errorHendler.js";



//register new user
export const createUser = async (userData) => {
    const { name, email, password, role, organization } = userData;
    
    console.log(userData);

    const userExists = await User.findOne({ email });
    
    if (userExists) {
      throw new ErrorHendler('User already exists', 400);
    }
    
    const user = await User.create({
      name,
      email,
      password,
      role,
      organization
    });
    
    return user;
  };


  // Authenticate user
export const authenticateUser = async (email, password) => {
    if (!email || !password) {
      throw new ErrorHendler('Please enter email and password', 400);
    }
    
    const user = await User.matchPassword(email, password);

  if (!user) {
    return next(new ErrorHendler("email or password is incorrect !!", 404));
  }
    
    return user;
  };

  // Get user by ID
export const getUserById = async (userId) => {
    const user = await User.findById(userId).populate('organization');
    
    if (!user) {
      throw new ErrorHendler('User not found', 404);
    }
    
    return user;
  };
  
  // Get all users
  export const getAllUsers = async () => {
    return await User.find().populate('organization');
  };
  
  // Update user
  export const updateUser = async (userId, userData) => {
    let user = await User.findById(userId);
    
    if (!user) {
      throw new ErrorHendler('User not found', 404);
    }
    
    user = await User.findByIdAndUpdate(userId, userData, {
      new: true,
      runValidators: true
    });
    
    return user;
  };
  
  // Delete user
  export const deleteUser = async (userId) => {
    const user = await User.findById(userId);
    
    if (!user) {
      throw new ErrorHendler('User not found', 404);
    }
    
    await user.remove();
    return true;
  };