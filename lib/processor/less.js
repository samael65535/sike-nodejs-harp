/**
 * Created by samael on 15-6-16.
 */

var less = require('less');
var fs = require('fs');
var path = require('path');
module.exports = makeLess;
function makeLess(root) {
    return function (req, res, next) {
        var extname = path.extname(req.url)
        if (extname == ".css") {
            fs.exists(root + req.url, function (exists) {
                var filename = root + req.url;
                if (!exists) {
                    filename = root + req.url.split('.')[0] + ".less";
                }
                fs.readFile(filename, {encoding: "utf8"}, function (err, data) {
                    if (err) {
                        next();
                        return;
                    }
                    if (exists) {
                        res.end(data);
                    } else {
                        less.render(data, function (e, output) {
                            if (err) {
                                next();
                                return;
                            }
                            res.end(output);
                        });
                    }

                });
            });

        }
    }
}