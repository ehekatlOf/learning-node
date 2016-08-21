var fs = require ("fs");

fs.readdir(process.argv[2], function (err, data){
    if (err) {
        return console.log(process.argv[2]);
    }
    var temp = data.filter(function(element){
        return element.split('').splice((element.length - 1) - (process.argv[3].length - 1), process.argv[3].length + 1).join('') == process.argv[3]
        &&
        element.split('')[element.split('').length - process.argv[3].split('').length - 1] == ".";
    });
    for (var i in temp){
        console.log (temp[i]);
    }
});