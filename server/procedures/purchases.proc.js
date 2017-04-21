var db = require('../config/db');

exports.post = function (total, stripeid, productid) {
    return db.empty("AddPurchase(?,?,?)", [total, stripeid, productid]);
}