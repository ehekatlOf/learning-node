var file = require("./writeModule");
var dir = process.argv[2];
var filter = process.argv[3];

file(dir,filter,function(err, data){
    if (err) {
        console.log('too soon');
    }
    return console.log(data);
});