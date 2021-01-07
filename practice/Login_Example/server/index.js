const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/route');

const mongoose = require('mongoose');
const config = require("./config/key");

const connect = mongoose.connect(config.mongoURI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('Mongo DB Connected...'))
.catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/app', router);

app.listen(port, () => {
    console.log('Server is Working');
})