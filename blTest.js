var bl = require('bl');
var fs = require('fs');

fs.createReadStream('README.md').pipe(bl(
    function(err, data) {
        if (err) {
            console.log('no m8');
        }
        console.log(data.toString());
    }));