function descOrder(num) {
	//return int("".join(sorted(str(num), reversed = true)))
	let string = num.toString();
	//return typeof(string);
	//return string;
	let split = string.split("");
	let sortStr = split.sort(function(a,b) {
		return b - a;
	});
	let rejoin = sortStr.join("");
	let toInt = parseInt(rejoin)
	return toInt;
}

console.log(descOrder(42145));


// simplified
function descendingOrder(num) {
	return parseInt(num
		.toString()
		.split("")
		.sort((a,b) => b - a)
		.join(""));
	//return parseInt(result);
}

console.log(descendingOrder(42145));