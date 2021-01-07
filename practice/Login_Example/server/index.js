const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/route');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/app', router);

app.listen(port, () => {
    console.log('Server is Working');
})