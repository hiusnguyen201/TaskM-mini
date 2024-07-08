var express = require("express");
var router = express.Router();

const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const boardRouter = require("./board.route");
const listRouter = require("./list.route");
const cardRouter = require("./card.route");

router.get("/", (req, res) => {
  console.log(111);
  return res.send("hello");
});

router.use(authRouter);
router.use(userRouter);
router.use(boardRouter);
router.use(listRouter);
router.use(cardRouter);

module.exports = router;
