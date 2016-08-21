

function pass(one,two,three){
    one = process.argv[2];
    two = process.argv[3];
    three = process.argv[4];
    return console.log(one, two, three);
}

module.exports = pass;