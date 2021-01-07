const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Auth 테스트");
})

app.post('/register', (req, res) => {
    res.send(req.body);
})

app.post('/login', (req, res) => {
    var token = jwt.sign(req.body.email, 'secretToken');
    res.send(token);
})

app.listen(port, () => {
    console.log("Server is Working");
})