const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
connection.connect(function(err)  {
    if (err) {
        console.error('Error for connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});
module.exports = connection;