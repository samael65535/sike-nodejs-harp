/**
 * Created by samael on 15-6-16.
 */
var jade = require('jade');
var fs = require('fs');
var path = require('path');
module.exports = makeJade;

function makeJade(root) {

    return function (req, res, next) {
        var extname = path.extname(req.url)
        if (extname == ".jade") {
            next();
            return
        }

        if (req.url == '/') {
            req.url = "/index.html";
        }
        if (path.extname(req.url) == ".html") {
            fs.exists(root + req.url, function (exists) {
                var filename = root + req.url;
                if (!exists) {
                    filename = root + req.url.split('.')[0] + ".jade";
                }
                fs.readFile(filename, {encoding: "utf8"}, function (err, data) {
                    if (err) {
                        next();
                        return;
                        //throw err;
                    }
                    // html or jade
                    var html = exists ? data : jade.render(data);
                    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8', 'Content-Length': html.length});
                    res.write(data)
                    res.end();
                })
            });

        }


    };
}