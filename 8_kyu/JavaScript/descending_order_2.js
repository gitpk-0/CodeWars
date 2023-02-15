function descendingOrder(num) {
	return parseInt(num
		.toString()
		.split('')
		.sort()
		.reverse()
		.join(''));
}

console.log(descendingOrder(245309));