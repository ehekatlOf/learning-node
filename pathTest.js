var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(err,data){
    if (err){
        console.log("wait for it");
    }
    return console.log(path.extname(data));
});