exports.isAsset = function (path) {
    var pieces = path.split('/');
    if (pieces.length === 0) {
        return false;
    };
    var last = pieces[pieces.length - 1];
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        return true;
    } else if (last.indexOf('.') !== -1) {
        return true;
    } else {
        return false;
    };
};

// app.get("*", function (req, res, next) {
//     if (isAsset(req.url)) {
//         return next();
//     } else {
//         res.sendFile(path.join(__dirname, "../client/index.html"));
//     }
// });