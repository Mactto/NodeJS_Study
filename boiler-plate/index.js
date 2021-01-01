const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mactto:akreh0707@boilerplate.ch2pk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected...")).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => console.log('server on'));