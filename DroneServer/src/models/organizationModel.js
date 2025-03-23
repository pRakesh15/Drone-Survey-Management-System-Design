import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    logoUrl: {
      type: String
    }
  }, {
    timestamps: true
  });

    export const Organization = mongoose.model("Organization", organizationSchema);
  