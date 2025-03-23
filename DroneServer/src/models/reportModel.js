import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    mission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mission',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    creationDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft'
    },
    flightStatistics: {
      duration: Number,
      distanceCovered: Number,
      areaCovered: Number,
      batteryUsed: Number,
      averageAltitude: Number,
      averageSpeed: Number
    },
    anomaliesDetected: {
      type: Number,
      default: 0
    },
    summary: String,
    notes: String
  }, {
    timestamps: true
  });
  
 export const Report = mongoose.model('Report', reportSchema);