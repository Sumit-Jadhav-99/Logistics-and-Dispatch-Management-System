const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    employeeId: {
      type: String,
      unique: true
    },

    licenseNumber: {
      type: String,
      required: true
    },

    experienceYears: {
      type: Number,
      default: 0
    },

    availabilityStatus: {
      type: String,
      enum: [
        "AVAILABLE",
        "ON_DELIVERY",
        "OFF_DUTY"
      ],
      default: "AVAILABLE"
    },

    emergencyContact: {
      type: String
    },

    rating: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports =
mongoose.model(
  "Driver",
  driverSchema
);