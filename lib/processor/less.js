/**
 * Created by samael on 15-6-16.
 */

var less = require('less');
var fs = require('fs');
var path = require('path');
module.exports = makeLess;
function makeLess(root) {
    return function (req, res, next) {
        if (path.extname(req.url) == ".css") {
            var filename = root + req.url.split('.')[0] + ".less";
            fs.readFile(filename, {encoding: "utf8"}, function (err, data) {
                if (err) {
                    //throw err;
                    next();
                    return;
                }
                less.render(data, function(e, output) {
                    if (err) {
                        next();
                        return;
                        //throw err;
                    }
                    res.end(output);
                });

            })
        }
    }
}