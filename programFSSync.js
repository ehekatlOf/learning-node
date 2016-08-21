var fs = require ('fs');

var feed = fs.readFileSync(process.argv[2]).toString().split(/\n/);

console.log(feed.length - 1);