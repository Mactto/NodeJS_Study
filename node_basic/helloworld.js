const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is Get Method');
})

app.post('/', (req, res) => {
    res.send('This is Post Method')
})

app.put('/product', (req, res) => {
    res.send('This is Put Method');
})

app.delete('/product', (req, res) => {
    res.send('This is Delete Method')
})

app.listen(port, () => {
    console.log('Server is Working');
})