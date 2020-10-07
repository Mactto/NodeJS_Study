var express = require("express");
var http = require("http");
var static = require("serve-static");
var path = require("path");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var app = express();
app.set("port", 3000);

app.use("/public", static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

var router = express.Router();

router.route("/process/setUserCookie").get(function (req, res) {
  console.log("cookie route execute");

  res.cookie("user", {
    id: "mactto",
    name: "sehwan",
    authorized: true,
  });
  res.redirect("/process/showCookie");
});

router.route("/process/showCookie").get(function (req, res) {
  console.log("show cookie route execute");

  res.send(req.cookies);
});

app.use("/", router);

app.all("*", function (req, res) {
  res.status(404).send("<h1>요청하신 페이지는 없어요.</h1>");
});

router.route("/process/login").post(function (req, res) {
  console.log("route function get");
  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write("<h1>서버에서 로그인 응답</h1>");
  res.write("<div><p>" + paramId + "</p></div>");
  res.write("<div><p>" + paramPassword + "</p></div>");
  res.end();
});

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("server started");
});
