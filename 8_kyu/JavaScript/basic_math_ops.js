function basicOp(operator, value1, value2) {
	let ops = {
		"+": (x,y) => x + y ,
		"-": (x,y) => x - y ,
		"*": (x,y) => x * y ,
		"/": (x,y) => x / y 
	};

	let result = ops[operator](value1, value2);

	return result;
}

console.log(basicOp('+', 10, 1));
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));