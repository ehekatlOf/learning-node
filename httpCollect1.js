var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
    var temp = [];
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        temp.push(chunk);
    });
    res.on('end',function(){
        console.log(temp.join('').split('').length);
        console.log(temp.join(''));
        res.end();
    });
});