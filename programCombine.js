var input = process.argv.splice(2,process.argv.length).map(num => Number(num));

function sum(prev, next){
    return prev + next;
}

console.log(input.reduce(sum));