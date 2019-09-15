var express = require("express");
var CryptoJS = require("crypto-js");
var crypto = require("crypto");
var router = express.Router();
data = require("../data-online");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("auth get call");
});
router.post("/", function(req, res, next) {
  // var minutes = 60000;
  var sendObj = {
    publicKey: req.body.user + " public",
    privateKey: req.body.address + " private address",
    maxDate: Date.now() + 60000 * 5
  };
  var intoSend = {
    publicKey: req.body.user + " public",
    privateKey: req.body.address + " private address",
    maxDate: Date.now() + 60000 * 5,
    address: req.body.address,
    user: req.body.user
  };
  // console.log(sendObj);
  data.push(intoSend);
  res.json(sendObj);
});
module.exports = router;
