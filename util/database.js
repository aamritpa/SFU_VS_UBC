const mysql = require('mysql2');

const pool =mysql.createPool({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3394278',
    database: 'sql3394278',
    password: 'uX9C6VaHdt'
});

module.exports= pool.promise();