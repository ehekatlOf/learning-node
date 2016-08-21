var fs = require ('fs');
var path = require ("path");

module.exports = function file(dir, filter, callback){
    
    fs.readdir(dir,function(err, data){
        if (err) {
            return callback(err, null);
        }
        data.forEach(function(element){
            if (path.extname(element) == '.' + filter){
                return callback(null, element);  
            }
        });
    }); 

};