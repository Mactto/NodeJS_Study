var express = require("express");
var http = require("http");

var app = express();
app.set("port", 3000);
app.use(function (req, res, next) {
  console.log("first middle ware.");

  req.user = "mactto";

  next();
});

app.use(function (req, res, next) {
  console.log("second middle ware");

  var person = { name: "오마이걸", age: 20 };
  var personStr = JSON.stringify(person);
  res.send(personStr);
});

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("asdf");
});
