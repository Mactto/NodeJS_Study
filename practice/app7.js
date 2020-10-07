var express = require("express");
var http = require("http");
var static = require("server-static");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.set("port", 3000);

app.use("/public", static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();

router.route("/process/login").post(function (req, res) {
  console.log("/process/login routing function get.");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write("<h1>서버에서 로그인 응답</h1>");
  res.write("<div><p>" + paramId + "</p></div>");
  res.write("<div><p>" + paramPassword + "</p></div>");
  res.end();
});

app.use("/", router);

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("server started");
});
