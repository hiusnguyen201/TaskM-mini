var express = require("express");
var router = express.Router();

const {
  createList,
  getLists,
  editList,
  deleteList,
} = require("../controllers/list.controller");

router.route("/lists").get(getLists).post(createList);

router.route("/lists/:listId").put(editList).delete(deleteList);

module.exports = router;
