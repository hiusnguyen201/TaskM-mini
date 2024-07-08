const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  listId: {
    type: mongoose.Types.ObjectId,
    ref: "List",
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
});

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
