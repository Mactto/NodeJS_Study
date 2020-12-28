var express = require('express');
var app = express();
app.listen(3000, function() {
    console.log('start!!! express server on');
});

app.get('/', function(req, res) {
    res.send("hi guys!");
})

app.use(express.static('public'));

app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/public/main.html")
})