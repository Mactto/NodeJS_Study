const express = require('express');
const app = express();
const port = 3000
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const mysql = require('mysql');

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
app.use(session({
    secret: 'asdfkj!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('join');
})

app.post('/login', 
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
}));

passport.serializeUser(function(user, done) {
    done(null, user.email);
});

passport.deserializeUser(function(email, done) {
    var sql = "select * from user where email='" + email + "';";
    connection.query(sql, (err, rows, fields) => {
        console.log(rows[0]);
        done(err, rows[0]);
    })
})

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'pwd'
    },
    function(username, password, done) {
        const pwd = password;
        var sql = "select * from user where email='" + username + "';";
        connection.query(sql, (err, rows, fields) => {
            if(err) return done(err);
            if (rows[0] == null) {
                console.log('no user');
                return done(null, false, {message: '해당 이메일의 유저가 없습니다.'});
            } 
            if (rows[0].password !== pwd) {
                console.log('password wrong');
                return done(null, false, {message: '비밀번호가 다릅니다'});
            }
            console.log('complete');
            return done(null, rows[0]);
        })
    }
))

app.listen(port, () => {
    console.log('Server is Working');
})