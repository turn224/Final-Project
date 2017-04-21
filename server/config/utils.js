var bcrypt = require("bcrypt");

exports.encryptPassword = function (pw) {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(function(err, salt) {
            bcrypt.hash(pw, salt, function (err, hash) {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });
    });
};
exports.checkPassword = function (pw, hash) {
    return new Promise(function (resolve, reject) {
        bcrypt.compare(pw, hash, function (err, matches) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(matches);
            }
        });
    });
};