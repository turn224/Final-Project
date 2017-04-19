var db = require('../config/db');

exports.all = function(){
    return db.rows('GetAllBlogs()', []);
}
exports.read = function(id){
    return db.row('GetSingleBlog(?)', [id]);
}
exports.post = function (title, content) {
    return db.empty("AddBlog(?,?)", [title, content]);
}