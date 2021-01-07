var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user: 'root',
    password : 'Mac34tto87~!',
    database : 'node_basic',
})

connection.connect();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/join.html'));
})

router.post('/register', (req, res) => {
    console.log('re');
    connection.query("insert into user (email, name, pw) values ('" + req.body.email + "', '" + req.body.name + "', '"+ req.body.password +"');", (err, rows) => {
        if (err) throw err;
        res.render('welcome.ejs', {'name': req.body.email, 'id': rows.insertId})
    })
})


module.exports = router;