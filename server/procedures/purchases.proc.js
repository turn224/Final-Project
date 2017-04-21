var db = require('../config/db');

exports.write = function (total, stripeid, productid) {
    return db.empty("AddPurchase(?,?,?)", [total, stripeid, productid]);
}