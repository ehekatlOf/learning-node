var fs = require ('fs');

var files = fs.readdir(process.argv[2],function(err, data){
    if (err) {
        return console.log("wait for it");
    }
    return data;
});

console.log();

module.exports.files = files;