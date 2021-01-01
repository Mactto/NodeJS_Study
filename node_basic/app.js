const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/public/main.html')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html')
})

app.post('/email_post', (req, res) => {
    res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', (req, res) => {
    var responseData = {'resule' : 'ok', 'email' : req.body.email};
    res.json(responseData);
})

app.listen(port, (req, res) => {
    console.log('Server On');
})