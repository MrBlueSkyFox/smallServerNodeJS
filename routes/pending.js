var express = require("express");
var router = express.Router();
pending = require("../data-pending");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send(pending);
});

module.exports = router;
