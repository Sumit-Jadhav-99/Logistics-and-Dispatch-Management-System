const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const trackingController =
require("../controllers/trackingController");

router.use(authMiddleware);

router.post(
"/",
trackingController.createTrackingEvent
);

router.get(
"/:orderId",
trackingController.getTrackingByOrder
);

module.exports = router;