const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const mongoose = require('mongoose');
const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected...")).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/register', (req, res) => {
    // 회원 가입 시 필요한 정보들을 client 에서 가져오면 
    // DB에 삽입

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.statux(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log('server on'));