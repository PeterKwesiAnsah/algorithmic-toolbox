#!/usr/bin/env node

process.stdin.once('data', (chunk) => {
	const inputs = chunk.toString().split(' ');
	const sum = Number(inputs[0]) + Number(inputs[1]);
	console.log(sum);
	process.exit(1);
});
