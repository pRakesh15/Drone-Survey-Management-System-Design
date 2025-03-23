import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    },
    location: {
      address: String,
      city: String,
      country: String,
      coordinates: {
        latitude: Number,
        longitude: Number
      }
    },
    boundaries: [{
      latitude: Number,
      longitude: Number
    }]
  }, {
    timestamps: true
  });
  
  export const Facility = mongoose.model('Facility', facilitySchema);