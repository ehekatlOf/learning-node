var http = require("http");
var entry = process.argv[2];

http.get(entry, function(response){
    response.setEncoding('utf8');
    response.on('data', function(success){console.log(success)});
});