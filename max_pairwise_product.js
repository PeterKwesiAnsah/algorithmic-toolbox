// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    const max_one = Math.max(...arr);
    const index = arr.findIndex((num) => Number(num) === Number(max_one));
    arr.splice(index, 1);
    const max_two = Math.max(...arr);
    return max_one * max_two;
    
}

module.exports = max;
