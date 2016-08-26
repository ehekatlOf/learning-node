var fs = require('fs');
var map = require('through2-map');

var reader = fs.createReadStream('README.md');
var writer = fs.createWriteStream('writeStream.js');

var caps = map(function(chunk){return chunk.toUpperCase()});

reader.pipe(map(function(chunk){
    return chunk.toUpperCase();
}));