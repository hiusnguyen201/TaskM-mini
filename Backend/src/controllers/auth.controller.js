const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        username,
      });

      if (!user) {
        return res.status(404).json({
          message: "User not Found",
        });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      return res.status(200).json({
        message: "Login Success",
        data: {
          user,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  register: async (req, res, next) => {
    try {
      const { username, password, confirmPassword } = req.body;
      console.log(req.body);
      if (password !== confirmPassword) {
        return res.status(421).json({
          message: "Validate Error",
        });
      }

      const user = await User.findOne({
        username,
      });

      if (user) {
        return res.status(421).json({
          message: "User Exist",
        });
      }

      const hash = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: hash,
      });

      return res.status(200).json({
        message: "Register Success",
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },
};
