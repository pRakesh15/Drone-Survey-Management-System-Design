import { createHmac, randomBytes } from "crypto";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'manager', 'operator'],
      default: 'operator'
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      
    }
  }, {
    timestamps: true
  });

  userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return;
  
    const salt = randomBytes(16).toString();
  
    const hasesPassword = createHmac("sha256", salt)
      .update(user.password)
      .digest("hex");
  
    this.salt = salt;
    this.password = hasesPassword;
  
    next();
  });
  
  //writing a vertual function for matching the hased password and the user provided password..
  
  userSchema.static("matchPassword", async function (email, password) {
    const user = await this.findOne({ email }).select("+password");
    if (!user) return false;
    const salt = user.salt;
    const hasedPassword = user.password;
    const userProvidedhasedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (hasedPassword != userProvidedhasedPassword) return false;
    const thisUser = { ...user.toObject(), password: undefined, salt: undefined };
  
    return thisUser;
  });
  
  userSchema.static("getResetToken", async function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
      return resetToken;
  });
  
  export const User = mongoose.model("User", userSchema);