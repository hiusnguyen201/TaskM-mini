var express = require("express");
var router = express.Router();

const {
  createBoard,
  getBoards,
  editBoard,
  deleteBoard,
} = require("../controllers/board.controller");

router.route("/boards").get(getBoards).post(createBoard);

router.route("/boards/:boardId").put(editBoard).delete(deleteBoard);

module.exports = router;
