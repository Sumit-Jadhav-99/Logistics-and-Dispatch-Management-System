const express = require("express");

const router =
    express.Router();

const authMiddleware =
    require("../middleware/authMiddleware");

const roleMiddleware =
    require("../middleware/roleMiddleware");

const dashboardController =
    require("../controllers/dashboardController");

router.use(authMiddleware);

router.get(
    "/",
    roleMiddleware("SuperAdmin"),
    dashboardController.getDashboardStats
);

router.get(
    "/driver",

    authMiddleware,

    roleMiddleware(
        "Driver"
    ), dashboardController.getDriverDashboard
);

router.get(
    "/dispatcher",

    authMiddleware,

    roleMiddleware(
        "Dispatcher"
    ),

    dashboardController
        .getDispatcherDashboard
);

module.exports = router;