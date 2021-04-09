// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

process.stdin.setEncoding('utf8');
rl.once('line', (line) => {
	rl.on('line', readLine);
});

function readLine(line) {
	const arr = line.toString().split(' ').map(Number);

	console.log(max(arr));
	process.exit();
}

function returnLargest(arr) {
	return arr.reduce(reducer);
}

function reducer(a, b) {
	return Math.max(a, b);
}

function max(arr) {
	// write your code here
	const max_one = returnLargest(arr);
	const index = arr.findIndex((num) => Number(num) === Number(max_one));
	arr.splice(index, 1);
	let max_two;
	if (arr.length === 0) {
		max_two = 1;
		return max_one * max_two;
	}
	max_two = returnLargest(arr);
	return max_one * max_two;
}

module.exports = max;
