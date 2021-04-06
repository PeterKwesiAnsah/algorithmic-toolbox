#!/usr/bin/env node
let length = 0;
process.stdin.on('data', (chunk) => {
	length = length + 1;
	if (length === 2) {
		const array = chunk.toString().split(' ');
		const max_one = Math.max(...array);
		const index = array.findIndex((num) => Number(num) === Number(max_one));
		array.splice(index, 1);
		const max_two = Math.max(...array);
		const result = max_one * max_two;
		console.log(result);
		process.stdin.push(null);
	}
});
