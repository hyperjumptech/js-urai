#!/usr/bin/env node

var fs = require('fs');
var glob = require('glob');
var lib = require('./lib');

var args = process.argv;

function showUsage() {
    console.log('Usage:');
    console.log();
    console.log('js-urai <glob-pattern>');
    console.log();
    console.log('Example: npx @hyperjumptech/js-urai **/*.js');
}

function processFile(fileName) {
    try {
        var contents = fs.readFileSync(fileName, 'utf-8');
        var reformatted = lib.reformat(contents);
        fs.writeFileSync(fileName, reformatted);
    } catch (e) {
        console.error('Can not parse', fileName);
    }
}

(function runner() {
    // The first two arguments are Node.js executable and this script.
    // https://nodejs.org/api/process.html#process_process_argv
    args.shift();
    args.shift();

    if (args.length === 0) {
        showUsage();
    } else {
        args.forEach(function(pattern) {
            glob(pattern, {}, function(er, files) {
                if (!er) {
                    files.forEach(processFile);
                }
            });
        });
    }
})();
