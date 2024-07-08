const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  boardId: {
    type: mongoose.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  cards: {
    type: mongoose.Types.ObjectId,
    ref: "Card",
  },
});

const List = mongoose.model("List", listSchema);
module.exports = List;
