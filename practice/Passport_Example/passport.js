const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStratedy = require('passport-google-oauth20').Strategy;
const db = require('./database');

passport.serializeUser(function(user, done) {
    console.log('serialize');
    return done(null, user.email);
})

passport.deserializeUser(function(email, done) {
    var sql = "select * from user where email='" + email + "';";
    db.query(sql, (err, rows, feilds) => {
        console.log('deserialize ', rows[0]);
        return done(err, rows[0]);
    })
})

passport.use(new LocalStrategy(
    function(username, password, done) {
        var sql = "select * from user where email='" + username + "';";
        var pwd = password;
        db.query(sql, (err, rows, fields) => {
            if (err) { return done(err) };
            if (rows[0].email === null) {
                console.log('not user');
                return done(null, false, {message: '유저가 존재하지 않습니다.'});
            }
            if (rows[0].password !== pwd) {
                console.log('password wrong');
                return done(null, false, {message: '비밀번호가 틀렸습니다.'});
            }
            return done(null, rows[0]);
        })
    }
))

passport.use(new GoogleStratedy({
    clientID: "71330120911-jgu61hvtt4c137s52tat1ntsnvqh5bci.apps.googleusercontent.com",
    clientSecret: "AIzaSyAF642CLjSJ_vF9UlQfoh3pcpfPOJ2GjHA",
    callbackURL: "http://localhost:3000/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
}
))

module.exports = passport;