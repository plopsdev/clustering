const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'Jonathan',
    host: 'localhost',
    password: '',
    database: 'clustering'
})

module.exports = db;