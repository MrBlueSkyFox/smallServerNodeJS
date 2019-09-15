var express = require("express");
var router = express.Router();
pending = require("../data-pending");
data = require("../data-online");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});
router.post("/", function(req, res, next) {
  var publicKeyReceiver = req.body.to;
  var publicKeySender = req.body.sender;
  var finder = data.find(element => element.publicKey === publicKeyReceiver);
  if (finder !== undefined) {
    let findAddressOfSender = data.find(
      element => element.publicKey === publicKeySender
    );
    if (findAddressOfSender !== undefined) {
      let sendToPending = {
        address: findAddressOfSender.address,
        maxDate: Date.now() + 60000 / 10
      };
      pending.push(sendToPending);
      res.json(finder.address);
    } else {
      res.send("Не существует адреса который отправил запрос");
    }
  } else {
    res.send("Не существует адреса которому хотите подключится");
  }
  // var minutes = 60000;
  res.send("deep shit");
});

module.exports = router;
