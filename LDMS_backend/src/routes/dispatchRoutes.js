const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const dispatchController =
require("../controllers/dispatchController");

router.use(authMiddleware);

router.post(
 "/",
 roleMiddleware(
  "SuperAdmin",
  "Dispatcher"
 ),
 dispatchController.createDispatch
);

router.get(
 "/",
 dispatchController.getDispatches
);

router.get(
 "/available-for-delivery",
 dispatchController.getCompletedDispatches
);

module.exports = router;