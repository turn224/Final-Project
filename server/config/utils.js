var bcrypt = require("bcrypt");
const saltRounds = 12;

exports.encryptPassword = function (pw) {
    return new Promise(function (resolve, reject) {
        bcrypt.hash(pw, saltRounds, function (err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
};
exports.checkPassword = function (pw, hash) {
    console.log(pw);
    console.log(hash);
    return new Promise(function (resolve, reject) {
        console.log(pw);
        console.log(hash);
        bcrypt.compare(pw, hash, function (err, matches) {
            console.log(pw);
            console.log(hash);
            console.log(err);
            console.log(matches);
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(matches);
            }
        });
    });
};