const mongoose = require("mongoose");

const dispatchSchema = new mongoose.Schema(
  {
    dispatchNumber: {
      type: String,
      unique: true
    },

    orderIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
      }
    ],

    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true
    },

    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true
    },

    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    dispatchDate: {
      type: Date,
      default: Date.now
    },

    expectedDeliveryDate: Date,

    currentStatus: {
      type: String,
      enum: [
        "PENDING",
        "IN_TRANSIT",
        "COMPLETED"
      ],
      default: "PENDING"
    },

    notes: String
  },
  {
    timestamps: true
  }
);

module.exports =
mongoose.model(
  "Dispatch",
  dispatchSchema
);