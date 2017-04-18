var db = require('../config/db');

exports.readByEmail = function(email) {
    return db.row('GetUserByEmail(?)', [email]);
}
exports.all = function(){
    return db.rows('GetAllCustomers()', []);
}
exports.read = function(id){
    return db.row('GetSingleCustomer(?)', [id]);
}
exports.update = function (firstname, lastname, email, phone, id) {
    return db.empty("UpdateCustomer(?,?,?,?)", [firstname, lastname, email, phone, id]);
}
exports.post = function (u, hash) {
    return db.empty("AddUser(?,?,?,?)", [u.firstname, u.lastname, u.email, u.phone, hash]);
}
exports.destroy = function (id) {
    return db.empty("DeleteCustomer(?)", [id]);
}