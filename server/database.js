const mysql = require('mysql');

const db = mysql.createConnection({
    user: '',
    host: 'localhost',
    password: '',
    database: ''
})

module.exports = db;