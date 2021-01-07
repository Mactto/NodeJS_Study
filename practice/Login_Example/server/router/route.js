const express = require('express');
router = express.Router();
const user = require('./user/user');

router.use('/user', user);

module.exports = router;