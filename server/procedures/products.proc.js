var db = require("../config/db");

//GET ALL THE PRODUCTS FROM THE DATABASE
exports.all = function () {
    return db.rows('GetAllProducts()', []);
}
//GET ALL THE SINGLE PRODUCT FROM THE DATABASE
exports.read = function (id) {
    return db.row('GetSingleProduct(?)', [id]);
}