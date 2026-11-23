const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    dispatchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dispatch",
      required: true,
    },

    deliveredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },

    receiverName: {
      type: String,
      required: true,
    },

    deliveryTime: {
      type: Date,
      default: Date.now,
    },

    remarks: {
      type: String,
    },

    deliveryStatus: {
      type: String,
      default: "COMPLETED",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
mongoose.model(
  "Delivery",
  deliverySchema
);