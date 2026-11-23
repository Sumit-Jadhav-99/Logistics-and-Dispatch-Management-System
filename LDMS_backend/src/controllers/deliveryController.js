const Delivery =
  require("../models/Delivery");

const Dispatch =
  require("../models/Dispatch");

const Order =
  require("../models/Order");

const Driver =
  require("../models/Driver");

const Vehicle =
  require("../models/Vehicle");



exports.createDelivery =
  async (req, res) => {
    try {

      const {
        orderId,
        dispatchId,
        deliveredBy,
        receiverName,
        remarks
      } = req.body;

      if (
        !orderId ||
        !dispatchId ||
        !deliveredBy ||
        !receiverName
      ) {
        return res.status(400).json({
          message:
            "All required fields must be filled"
        });
      }

      const existingDelivery =
        await Delivery.findOne({
          dispatchId
        });

      if (existingDelivery) {

        return res.status(400).json({
          message:
            "Delivery already confirmed"
        });
      }

      const delivery =
        await Delivery.create({

          orderId,
          dispatchId,
          deliveredBy,
          receiverName,
          remarks

        });

      await Order.findByIdAndUpdate(
        orderId,
        {
          orderStatus:
            "DELIVERED"
        }
      );

      const dispatch =
        await Dispatch.findByIdAndUpdate(
          dispatchId,
          {
            currentStatus:
              "COMPLETED"
          },
          {
            new: true
          }
        );

      await Driver.findByIdAndUpdate(
        dispatch.driverId,
        {
          availabilityStatus:
            "AVAILABLE"
        }
      );

      await Vehicle.findByIdAndUpdate(
        dispatch.vehicleId,
        {
          status:
            "AVAILABLE"
        }
      );

      res.status(201).json({
        success: true,
        delivery
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
  };

exports.getDeliveries =
  async (req, res) => {

    try {

      const deliveries =
        await Delivery.find()

          .populate(
            "orderId",
            "orderNumber"
          )

          .populate(
            "dispatchId",
            "dispatchNumber"
          )

          .populate(
            "deliveredBy",
            "employeeId"
          );

      res.status(200).json(
        deliveries
      );

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
  };

