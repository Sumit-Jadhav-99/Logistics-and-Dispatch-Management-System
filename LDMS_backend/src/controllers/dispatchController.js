const Dispatch = require("../models/Dispatch");
const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");
const Order = require("../models/Order");

exports.createDispatch =
async (req, res) => {

  try {

    const {
      orderIds,
      driverId,
      vehicleId,
      expectedDeliveryDate,
      notes
    } = req.body;

    if (
      !orderIds?.length ||
      !driverId ||
      !vehicleId
    ) {

      return res.status(400).json({
        message:
        "Order, Driver and Vehicle are required"
      });
    }

    const driver =
    await Driver.findById(driverId);

    if (!driver) {

      return res.status(404).json({
        message: "Driver not found"
      });
    }

    if (
      driver.availabilityStatus !==
      "AVAILABLE"
    ) {

      return res.status(400).json({
        message:
        "Driver is not available"
      });
    }

    const vehicle =
    await Vehicle.findById(vehicleId);

    if (!vehicle) {

      return res.status(404).json({
        message: "Vehicle not found"
      });
    }

    if (
      vehicle.status !== "AVAILABLE"
    ) {

      return res.status(400).json({
        message:
        "Vehicle is not available"
      });
    }

    const count =
    await Dispatch.countDocuments();

    const dispatch =
    await Dispatch.create({

      dispatchNumber:
      `DSP${1000 + count + 1}`,

      orderIds,
      driverId,
      vehicleId,

      assignedBy:
      req.user.id,

      expectedDeliveryDate,
      notes
    });

    await Driver.findByIdAndUpdate(
      driverId,
      {
        availabilityStatus:
        "ON_DELIVERY"
      }
    );

    await Vehicle.findByIdAndUpdate(
      vehicleId,
      {
        status:
        "ASSIGNED"
      }
    );

    await Order.updateMany(
      {
        _id: {
          $in: orderIds
        }
      },
      {
        orderStatus:
        "ASSIGNED"
      }
    );

    res.status(201).json({
      success: true,
      dispatch
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

exports.getDispatches =
async (req, res) => {

  try {

    const dispatches =
    await Dispatch.find()

      .populate(
        "driverId"
      )

      .populate(
        "vehicleId"
      )

      .populate(
        "orderIds"
      );

    res.status(200).json(
      dispatches
    );

  } catch (error) {

    res.status(500).json({
      message:error.message
    });
  }
};

exports.getCompletedDispatches = async (req,res)=>{

 try{

   const dispatches =
   await Dispatch.find({
     currentStatus:"PENDING"
   })
   .populate("driverId")
   .populate("vehicleId")
   .populate("orderIds");

   res.status(200).json(dispatches);

 }catch(error){

   res.status(500).json({
    message:error.message
   });

 }

};