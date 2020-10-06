var express = require("express");
var http = require("http");

var app = express();
app.set("port", 3000);
app.use(function (req, res, next) {
  console.log("first middle ware.");

  res.redirect("https://google.co.kr");
});
var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("asdf");
});
