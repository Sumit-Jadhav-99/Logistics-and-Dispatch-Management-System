const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
    },

    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    pickupAddress: {
      address: String,
      city: String,
      state: String,
      pincode: String,
    },

    deliveryAddress: {
      address: String,
      city: String,
      state: String,
      pincode: String,
    },

    shipmentDetails: {
      itemDescription: String,
      quantity: Number,
      weightKg: Number,
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },

    orderStatus: {
      type: String,
      enum: [
        "CREATED",
        "APPROVED",
        "ASSIGNED",
        "DISPATCHED",
        "DELIVERED",
        "CANCELLED",
      ],
      default: "CREATED",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Order",
  orderSchema
);