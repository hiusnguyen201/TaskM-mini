var express = require("express");
var router = express.Router();

const { getUsers } = require("../controllers/user.controller");

/* GET users listing. */
router.route("/users").get(getUsers);

module.exports = router;
