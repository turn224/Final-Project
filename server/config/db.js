var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_U,
    password: process.env.DB_PASS,
    database: process.env.DB
});

exports.pool = pool;