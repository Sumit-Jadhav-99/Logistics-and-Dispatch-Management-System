const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const deliveryController =
require("../controllers/deliveryController");

router.use(authMiddleware);

router.post(
 "/",
 roleMiddleware(
  "SuperAdmin",
  "Dispatcher",
  "Driver"
 ),
 deliveryController.createDelivery
);

router.get(
 "/",
 deliveryController.getDeliveries
);

module.exports = router;