var http = require('http');
var bufferList = require('bl');
var bl = new bufferList();
var url = process.argv[2];


http.get(url, function(res){
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        bl.append(chunk);
    });
    res.on('end',function(){
        console.log(bl.length);
        console.log(bl.slice(0,bl.length).toString('ascii'));
        res.end();
    });
});