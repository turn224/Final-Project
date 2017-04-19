var db = require("../config/db");

//GET ALL THE SERVICES FROM THE DATABASE
exports.all = function () {
    return db.rows('GetAllServices()', []);
}

//GET ALL THE SINGLE SERVICE FROM THE DATABASE
exports.read = function (id) {
    return db.row('GetSingleService(?)', [id]);
}