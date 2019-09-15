var express = require("express");
var router = express.Router();
var data = require("../data-online");
/* GET users listing. */
router.get("/", function(req, res, next) {
  const dat = [
    {
      name: "Andr",
      key: "1488"
    },
    {
      name: "Dima",
      key: "1299"
    }
  ];
  res.send(data);
});

module.exports = router;
