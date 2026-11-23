const mongoose = require("mongoose");

const trackingEventSchema =
    new mongoose.Schema(
        {
            dispatchId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Dispatch",
                required: true
            },

            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order",
                required: true
            },

            status: {
                type: String,
                enum: [
                    "PICKED_UP",
                    "IN_TRANSIT",
                    "AT_HUB",
                    "OUT_FOR_DELIVERY",
                    "DELIVERED"
                ],
                required: true
            },

            remarks: String,

            location: {
                city: String,
                latitude: String,
                longitude: String
            },

            updatedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }

        },
        {
            timestamps: true
        });

module.exports =
    mongoose.model(
        "TrackingEvent",
        trackingEventSchema
    );