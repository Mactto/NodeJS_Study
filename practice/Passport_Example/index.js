const express = require('express');
const app = express();
const port = 3000
const mysql = require('mysql');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Mac34tto87~!',
    database: 'passport'
})
connection.connect();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('join')
})

app.listen(port, () => {
    console.log('Server is Working');
})