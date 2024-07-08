const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Board = require("./board.model");

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  boards: {
    type: mongoose.Types.ObjectId,
    ref: "Board",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
