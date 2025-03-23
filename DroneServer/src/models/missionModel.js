import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: String,
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    },
    facility: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Facility',
      required: true
    },
    drone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Drone',
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    status: {
      type: String,
      enum: ['scheduled', 'in-progress', 'completed', 'aborted'],
      default: 'scheduled'
    },
    missionType: {
      type: String,
      enum: ['perimeter', 'crosshatch', 'custom'],
      required: true
    },
    schedule: {
      type: {
        type: String,
        enum: ['one-time', 'recurring'],
        default: 'one-time'
      },
      startTime: {
        type: Date,
        required: true
      },
      endTime: Date,
      recurrencePattern: {
        type: String,
        enum: ['daily', 'weekly', 'monthly'],
      },
      recurrenceDays: [Number] // 0-6 for days of week
    },
    configuration: {
      altitude: Number,
      speed: Number,
      overlapPercentage: Number,
      sensorSettings: mongoose.Schema.Types.Mixed
    },
    waypoints: [{
      order: Number,
      latitude: Number,
      longitude: Number,
      altitude: Number,
      action: String
    }],
    progress: {
      percentComplete: {
        type: Number,
        default: 0
      },
      currentWaypoint: Number,
      estimatedTimeRemaining: Number
    },
    statistics: {
      startTime: Date,
      endTime: Date,
      duration: Number,
      distanceCovered: Number,
      areaCovered: Number,
      batteryUsed: Number
    }
  }, {
    timestamps: true
  });
  
 export const Mission = mongoose.model('Mission', missionSchema);