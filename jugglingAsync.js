var http = require('http');
var bl = require('bl');

function spaghetti(cycle) {
    if (cycle < process.argv.length)
    http.get(process.argv[cycle + 2], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) {
                console.log('no m8');
            }
            console.log(data.toString());
            cycle++;
            spaghetti(cycle);
        }));
    });
}

spaghetti(0);