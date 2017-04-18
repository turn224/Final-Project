var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "group2.coj9jg8nqvno.us-east-1.rds.amazonaws.com",
    user: process.env.DB_U,
    password: process.env.DB_PASS,
    database: "HairSmoothieBar"
});

exports.pool = pool;