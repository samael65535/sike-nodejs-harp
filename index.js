/**
 * Created by samael on 15-6-15.
 */

//var serveStatic = require('serve-static');
var connect = require('connect');
var path = require('path');
module.exports = function(root) {
    var makeJade = require('./lib/processor/jade')(root);
    var makeLess = require('./lib/processor/less')(root);
    var app = connect();
    app.use(function(req, res, next) {
        var extname= path.extname(req.url)
        if (extname == '.html') {
            makeJade(req, res, next);
        } else if (extname == '.css') {
            makeLess(req, res, next);
        } else {
            next();
        }
    });

    return app;
};

