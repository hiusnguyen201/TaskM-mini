const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
  lists: {
    type: mongoose.Types.ObjectId,
    ref: "List",
  },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
