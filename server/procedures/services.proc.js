var db = require("../config/db");

//GET ALL THE SERVICES FROM THE DATABASE
exports.all = function () {
    return db.rows('GetAllServices()', []);
}