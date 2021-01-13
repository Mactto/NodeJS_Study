const passport = require('passport');
const LocalStrategy = require('passport.local').Strategy;
const db = require('./database');

db.connect();

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    })

    passport.deserializeUser((user, done) => {
        done(null, user);
    })

    passport.use('local', LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: true,
        passReqToCallback: true,
    }, (req, email, password, done) => {
        var sql = "select email from user where email='" + email + "';";
        db.query(sql, function(err, rows, fields) {
            if (err) console.log(err);
            console.log('rows', rows);
            console.log('fields', fields);
            connection.end();
        })
    }))
}