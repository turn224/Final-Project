exports.isLoggedIn = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        console.log('user');
        res.sendStatus(401);
    }
}

exports.isAdmin = function (req, res, next) {
    if (req.user.role === 'admin') {
        next();
    } else {
        console.log('admin');
        res.sendStatus(401); //unauthorized
    }
}