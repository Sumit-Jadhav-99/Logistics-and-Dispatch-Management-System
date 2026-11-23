const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {

  try {

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      roleName
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const role =
      await Role.findOne({
        roleName
      });

    if (!role) {
      return res.status(404).json({
        message: "Role not found"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      roleId: role._id
    });

    return res.status(201).json({
      message: "User Created",
      user
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });
  }
};

exports.getAllUsers = async (req, res) => {

  try {

    const users = await User.find()
      .populate(
        "roleId",
        "roleName"
      );

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

exports.getUserById = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(
        req.params.id
      ).populate(
        "roleId",
        "roleName"
      );

    if (!user) {

      return res.status(404).json({
        message: "User Not Found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateUserStatus = async (req, res) => {

  try {

    const { accountStatus } =
      req.body;

    const user =
      await User.findByIdAndUpdate(
        req.params.id,
        {
          accountStatus
        },
        {
          new: true
        }
      );

    res.status(200).json({
      message: "Status Updated",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};