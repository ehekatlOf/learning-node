var http = require('http');
var bl = require('bl');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var cycle = 0;

function spaghetti() {
    if (cycle < urls.length)
    http.get(urls[cycle], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) {
                console.log('no m8');
            }
            console.log(data.toString());
            cycle++;
            spaghetti();
        }));
    });
}

spaghetti();