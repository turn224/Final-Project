var db = require('../config/db');

exports.all = function () {
    return db.rows('GetAllPurchases()', []);
}
exports.write = function (total, stripetransactionid, productid) {
    return db.empty("AddPurchase(?,?,?)", [total, stripetransactionid, productid]);
}