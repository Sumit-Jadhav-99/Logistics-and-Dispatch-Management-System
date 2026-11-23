const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserStatus
} = require(
  "../controllers/userController"
);

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware("SuperAdmin"),
  createUser
);

router.get(
  "/",
  roleMiddleware("SuperAdmin"),
  getAllUsers
);

router.get(
  "/:id",
  roleMiddleware("SuperAdmin"),
  getUserById
);

router.put(
  "/:id/status",
  roleMiddleware("SuperAdmin"),
  updateUserStatus
);

module.exports = router;