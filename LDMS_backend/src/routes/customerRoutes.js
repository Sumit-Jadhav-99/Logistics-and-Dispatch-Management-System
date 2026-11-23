const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

const customerController =
  require("../controllers/customerController");

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware(
    "SuperAdmin",
    "Dispatcher"
  ),
  customerController.createCustomer
);

router.get(
  "/",
  customerController.getCustomers
);

router.get(
  "/:id",
  customerController.getCustomerById
);

router.put(
  "/:id",
  customerController.updateCustomer
);

router.put(
  "/:id/status",
  customerController.updateStatus
);

module.exports = router;
