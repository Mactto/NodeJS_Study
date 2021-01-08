const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("EJS Example");
})

app.get('/ejs', (req, res) => {
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    var context = {
        title: "sehwan",
        content: "node js study"
    }
    res.render('main', context, function(err, html) {
        if(err) {
            console.log(err);
        }
        res.end(html);
    });
})

app.post('/ejs', (req, res) => {
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    var context = {
        title: req.body.title,
        content: req.body.content
    }
    res.render('main', context, function(err, html) {
        if(err) {
            console.log(err);
        }
        res.end(html);
    });
})

app.listen(port, () => {
    console.log('Server is Running');
})