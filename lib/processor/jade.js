/**
 * Created by samael on 15-6-16.
 */
var jade = require('jade');
var fs = require('fs');
var path = require('path');
module.exports = makeJade;

function makeJade(root) {

    return function(req, res, next){
        var html;
        if (path.extname(req.url) == ".html") {
            fs.exists(root + req.url, function(exists){
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
                    html = exists ? data : jade.render(data);
                    res.end(html);
                })
            });

        }


    };
}