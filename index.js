/**
 * Created by samael on 15-6-15.
 */

var serveStatic = require('serve-static');
var connect = require('connect');
var makeJade = require('./lib/processor/jade');
module.exports = function(root) {
    var app = connect();
    app.use(makeJade(root));
    //app.use(serveStatic(root));
    return app;
};

