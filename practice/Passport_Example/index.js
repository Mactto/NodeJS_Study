const express = require('express');
const app = express();
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({secret: 'asdfkj~!', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }), (req, res) => {
        res.redirect('/');
    }
)

app.listen(port, () => {
    console.log('Server is working');
})