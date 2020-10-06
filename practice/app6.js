var express = require("express");
var http = require("http");
var static = require("serve-static");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.set("port", 3000);
app.use(static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("server execute");
});
