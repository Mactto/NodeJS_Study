const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var router = require('./router/index');

const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(router);

app.listen(port, (req, res) => {
    console.log('Server On');
})