/**
 * Created by samael on 15-6-16.
 */
var jade = require('jade');
var fs = require('fs');
var connect = require('connect');
var path = require('path')
module.exports = makeJade;

function makeJade(root) {

    return function(req, res, next){
        var html;
        if (path.extname(req.url) == ".html") {
            var filename = root + req.url.split('.')[0] + ".jade";
            console.log(filename);
            fs.readFile(filename, {encoding: "utf8"}, function (err, data) {
                if (err) {
                    next();
                    //throw err;
                }
                html = jade.render(data)
                res.end(html);
            })
        }


    };
}