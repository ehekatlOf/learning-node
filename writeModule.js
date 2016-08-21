var fs = require ('fs');
var path = require ("path");

module.exports = function file(dir, filter){
    fs.readdir(dir,function(err, data){
        if (err) {
            return console.log("wait for it");
        }
        return console.log(path.extname(data));
    });  
};