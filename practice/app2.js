var express = require("express");
var http = require("http");

var app = express();
app.set("port", 3000);
app.use(function (req, res, next) {
  console.log("first middle ware.");

  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.end("<h1>server response result</h1>");
});

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("asdf");
});
