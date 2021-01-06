var express = require('express');
var router = express.Router()
var path = require('path');

var main = require('./main/main');
var form = require('./form/form');
var email = require('./email/email');
var join = require('./join/join');

router.use('/main', main);
router.use('/form', form);
router.use('/email', email);
router.use('/join', join);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/main.html'))
})

module.exports = router;