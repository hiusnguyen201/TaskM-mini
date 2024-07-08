const mongoose = require("mongoose");
const User = require("../models/user.model");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await User.find();

      return res.status(200).json({
        message: "Success",
        data: {
          users,
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
