const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Mac34tto87~!',
    database: 'passport'
})

module.exports = connection;