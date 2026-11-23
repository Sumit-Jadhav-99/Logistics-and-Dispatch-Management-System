const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const orderController =
require("../controllers/orderController");

router.use(authMiddleware);

router.post(
 "/",
 roleMiddleware(
  "SuperAdmin",
  "Dispatcher"
 ),
 orderController.createOrder
);

router.get(
 "/",
 orderController.getOrders
);

router.put(
 "/:id/status",
 orderController.updateOrderStatus
);

module.exports = router;