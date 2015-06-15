/**
 * Created by samael on 15-6-15.
 */

var serveStatic = require('serve-static');
var connect = require('connect');

module.exports = function(root) {
    var app = connect();
    //app.use(function(request,response,next) {
    //    if (request.url == "/current_time") {
    //        response.end((new Date()).toISOString());
    //    } else {
    //        response.end("Cannot Get " +  request.url);
    //    }
    //});
    app.use(serveStatic(root));
    return app;
};

