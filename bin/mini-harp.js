#!/usr/bin/env node
var parseArgs = require('minimist')(process.argv.slice(2));

var createMiniHarp = require("../index")
var port = parseArgs['port'] || 4000;
var root = parseArgs._[0];
var app = createMiniHarp(root);
console.log("Starting mini-harp on http://localhost:" + port);


app.listen(port);