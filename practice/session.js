var express = require("express");
var http = require("http");
var static = require("serve-static");
var path = require("path");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var expressSession = require("express-session");

var app = express();
app.set("port", 3000);

app.use("/public", static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "my key",
    resave: true,
    saveUninitialized: true,
  })
);

var router = express.Router();

router.route("/process/product").get(function (req, res) {
  console.log("product route exc");

  if (req.session.user) {
    res.redirect("/public/product.html");
  } else {
    res.redirect("public/login.html");
  }
});

router.route("/process/login").post(function (req, res) {
  console.log("/process/login 라우팅 함수 호출됨");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;
  console.log(paramId + ", " + paramPassword);

  if (req.session.user) {
    console.log("이미 로그인 되어 있음");
    res.redirect("/public/product.html");
  } else {
    req.session.user = {
      id: paramId,
      name: "mactto",
      authorized: true,
    };

    res.writeHead(200, { "Content-Type": "test/html;chatset:utf8" });
    res.write("로그인 성공");
    res.write("<p>Id : " + paramId + "</p>");
    res.write('<br><br><a href="/public/product.html">상품페이지이동</a>');
    res.end();
  }
});

router.route("/process/logout").post(function (req, res) {
  console.log("logout exc");

  if (req.session.user) {
    console.log("로그아웃합니다.");

    req.session.destroy(function (err) {
      if (err) {
        console.log("session delete error");
        return;
      }
      console.log("complete");
      res.redirect("/public/login.html");
    });
  } else {
    res.redirect("public/login.html");
  }
});

router.route("/process/setUserCookie").get(function (req, res) {
  console.log("setUserCookie route exc");

  res.cookie("user", {
    id: "mactto",
    name: "sehwan",
    authorized: true,
  });
  res.redirect("/process/showCookie");
});

router.route("/process/showCookie").get(function (req, res) {
  console.log("showCookie route exc");

  res.send(req.cookies);
});

app.use("/", router);

app.all("*", function (req, res) {
  res.status(404).send("요청하신 페이가 없습니다.");
});

router.route("/public/login").post(function (req, res) {
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
