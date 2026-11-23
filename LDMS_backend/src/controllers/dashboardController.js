
const User = require("../models/User");
const Customer = require("../models/Customer");
const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");
const Order = require("../models/Order");
const Dispatch = require("../models/Dispatch");
const Delivery = require("../models/Delivery");

exports.getDashboardStats = async (req, res) => {
  try {

    const totalUsers =
      await User.countDocuments();

    const totalCustomers =
      await Customer.countDocuments();

    const totalDrivers =
      await Driver.countDocuments();

    const totalVehicles =
      await Vehicle.countDocuments();

    const totalOrders =
      await Order.countDocuments();

    const totalDispatches =
      await Dispatch.countDocuments();

    const totalDeliveries =
      await Delivery.countDocuments();

    const activeDispatches =
      await Dispatch.countDocuments({
        currentStatus: "PENDING"
      });

    const availableDrivers =
      await Driver.countDocuments({
        availabilityStatus: "AVAILABLE"
      });

    const availableVehicles =
      await Vehicle.countDocuments({
        status: "AVAILABLE"
      });

    const deliveredOrders =
      await Order.countDocuments({
        orderStatus: "DELIVERED"
      });

    res.status(200).json({
      totalUsers,
      totalCustomers,
      totalDrivers,
      totalVehicles,
      totalOrders,
      totalDispatches,
      totalDeliveries,
      activeDispatches,
      availableDrivers,
      availableVehicles,
      deliveredOrders
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


exports.getDriverDashboard =
  async (req, res) => {

    try {

      const userId = req.user.id;

      const driver =
        await Driver.findOne({
          userId
        });

      if (!driver) {

        return res.status(404).json({
          message: "Driver not found"
        });

      }

      const totalDispatches =
        await Dispatch.countDocuments({
          driverId: driver._id
        });

      const activeDispatches =
        await Dispatch.countDocuments({
          driverId: driver._id,
          currentStatus: "PENDING"
        });

      const completedDeliveries =
        await Delivery.countDocuments({
          deliveredBy: driver._id
        });

      res.status(200).json({

        totalDispatches,

        activeDispatches,

        completedDeliveries,

        availabilityStatus:
          driver.availabilityStatus

      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  };


exports.getDispatcherDashboard =
  async (req, res) => {

    try {

      const totalOrders =
        await Order.countDocuments();

      const pendingOrders =
        await Order.countDocuments({
          orderStatus: "CREATED"
        });

      const activeDispatches =
        await Dispatch.countDocuments({
          currentStatus: "PENDING"
        });

      const availableDrivers =
        await Driver.countDocuments({
          availabilityStatus: "AVAILABLE"
        });

      const availableVehicles =
        await Vehicle.countDocuments({
          status: "AVAILABLE"
        });

      const completedDeliveries =
        await Delivery.countDocuments();

      res.status(200).json({

        totalOrders,

        pendingOrders,

        activeDispatches,

        availableDrivers,

        availableVehicles,

        completedDeliveries

      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  };