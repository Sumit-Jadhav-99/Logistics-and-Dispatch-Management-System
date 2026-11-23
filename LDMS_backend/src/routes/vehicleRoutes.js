const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const vehicleController =
require("../controllers/vehicleController");

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware(
    "SuperAdmin",
    "Dispatcher"
  ),
  vehicleController.createVehicle
);

router.get(
  "/",
  vehicleController.getVehicles
);

router.get(
  "/:id",
  vehicleController.getVehicleById
);

router.put(
  "/:id",
  vehicleController.updateVehicle
);

router.put(
  "/:id/status",
  vehicleController.updateVehicleStatus
);

module.exports = router;