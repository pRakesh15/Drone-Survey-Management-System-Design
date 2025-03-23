import Jwt from "jsonwebtoken";
import { catchError } from "./chatchError.js";
import ErrorHendler from "../utils/errorHendler.js";
import { User } from "../models/userModel.js";

export const isAuthenticate = catchError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHendler("Plz Login or signUp", 404));

  const decoded = Jwt.verify(token, process.env.JWT_SECREATE);

  //this will set for find the req.user and check the request is valid or note and send the user details...
  req.user = await User.findById(decoded.id)
    .select("-password")
    .select("-salt");
  next();
});
//make a middleware for checking the user is a admin or not
// export const isAdminAuthenticate = catchError(async (req, res, next) => {
    
//   if (req.user.role != "admin")
//     return next(
//       new ErrorHendler(
//         `${req.user.role} is note allow to access this resourse`,
//         403
//       )
//     );
//     next();
// });
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHendler(`Role (${req.user.role}) is not allowed to access this resource`, 403));
    }
    next();
  };
};
