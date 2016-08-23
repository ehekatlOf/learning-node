var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var cycle = 0;

for (var i in urls) {
    http.get(urls[i], function(res) {
        var temp = [];
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            temp.push(chunk);
        });
        res.on('end', function() {
            cycle++;
            console.log(temp.join(''));
            res.end();
        });
    });
}
