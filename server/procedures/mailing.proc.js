var db = require('../config/db');

exports.post = function (u) {
    return db.empty("AddMailing(?,?,?,?)", [u.firstname, u.lastname, u.fromEmail, u.phone]);
}