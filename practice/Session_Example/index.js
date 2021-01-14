const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'asdfasdfl;',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    console.log(req.session);
    res.send('Hello session');
})

app.listen(3000, () => {
    console.log('Server is Working');
})