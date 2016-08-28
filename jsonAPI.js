var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

    if (req.method == 'GET') {

        var parsed = url.parse(req.url, true).query.iso;

        var hmsFormat = {
            "hour": new Date(parsed).getHours(),
            "minute": new Date(parsed).getMinutes(),
            "second": new Date(parsed).getSeconds()
        };

        var unixFormat = {
            'unixtime' : new Date(parsed).getTime()
        };
        
        if (url.parse(req.url, true).pathname == "/api/parsetime") {
            res.write(JSON.stringify(hmsFormat));
        }

        if (url.parse(req.url, true).pathname == "/api/unixtime") {
            res.write(JSON.stringify(unixFormat));
        }

        res.end();
    }


});

server.listen(process.argv[2]);