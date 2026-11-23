const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true
    },

    vehicleType: {
      type: String,
      required: true
    },

    manufacturer: {
      type: String
    },

    capacityKg: {
      type: Number,
      required: true
    },

    fuelType: {
      type: String,
      enum: [
        "Petrol",
        "Diesel",
        "Electric",
        "CNG"
      ]
    },

    status: {
      type: String,
      enum: [
        "AVAILABLE",
        "ASSIGNED",
        "MAINTENANCE",
        "INACTIVE"
      ],
      default: "AVAILABLE"
    },

    registrationExpiry: {
      type: Date
    },

    insuranceExpiry: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Vehicle",
  vehicleSchema
);