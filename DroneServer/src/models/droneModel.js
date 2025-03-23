import mongoose from "mongoose";

const droneSchema = new mongoose.Schema({
    serialNumber: {
      type: String,
      required: true,
      unique: true
    },
    model: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    },
    facility: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Facility'
    },
    status: {
      type: String,
      enum: ['available', 'in-mission', 'maintenance', 'inactive'],
      default: 'available'
    },
    batteryLevel: {
      type: Number,
      min: 0,
      max: 100,
      default: 100
    },
    lastMaintenance: {
      type: Date,
      default: Date.now
    },
    specifications: {
      maxFlightTime: Number,
      maxSpeed: Number,
      maxAltitude: Number,
      sensorTypes: [String]
    },
    currentLocation: {
      latitude: Number,
      longitude: Number,
      altitude: Number,
      lastUpdated: Date
    }
  }, {
    timestamps: true
  });
  
 export const Drone = mongoose.model('Drone', droneSchema);