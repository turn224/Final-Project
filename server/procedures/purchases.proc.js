var db = require('../config/db');

exports.all = function () {
    return db.rows('GetAllPurchases()', []);
}
exports.write = function (total, custName, productName) {
    return db.empty("AddPurchase(?,?,?)", [total, custName, productName]);
}