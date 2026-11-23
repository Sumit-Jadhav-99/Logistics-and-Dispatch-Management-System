const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const driverController =
require("../controllers/driverController");

router.use(authMiddleware);

router.post(
 "/",
 roleMiddleware(
 "SuperAdmin"
 ),
 driverController.createDriver
);

router.get(
 "/",
 driverController.getDrivers
);

router.put(
 "/:id/status",
 driverController.updateDriverStatus
);

module.exports = router;