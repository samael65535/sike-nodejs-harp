#!/usr/bin/env node
var parseArgs = require('minimist')(process.argv.slice(2));
var createMiniHarp = require("../index")
    , app = createMiniHarp();
var port = parseArgs['port'] || 4000;

console.log("Starting mini-harp on http://localhost:" + port);

app.use(function(request,response,next) {
    if (request.url == "/current_time") {
        response.end((new Date()).toISOString());
    } else {
        response.end("Cannot Get " +  request.url);
    }
});

app.listen(port);