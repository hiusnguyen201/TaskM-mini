var express = require("express");
var router = express.Router();

const {
  createCard,
  getCards,
  editCard,
  deleteCard,
} = require("../controllers/card.controller");

router.route("/cards").get(getCards).post(createCard);

router.route("/cards/:cardId").put(editCard).delete(deleteCard);

module.exports = router;
