var db = require("../config/db");

//GET ALL THE HAIRSTYLES FROM THE DATABASE
exports.all = function () {
    return db.rows('GetAllHairstyles()', []);
}
//GET ALL THE HAIRSTYLE PRODUCT FROM THE DATABASE
exports.read = function (id) {
    return db.row('GetSingleHairstyle(?)', [id]);
}