function toJadenCase(str) {
	//

	let arr = str.split(" ");
	//console.log(arr);
	// let teststr = arr.join(" ");
	// console.log(teststr);
	//console.log(arr);

	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i][0].toUpperCase());
		for (let j = 1; j <= arr[i].length; j++) {
			if (arr[i][j] !== undefined) {
				newArr.push(arr[i][j]);
			}
			if (j == arr[i].length) {
				newArr.push(" ");
			}
		}
		newArr.join(" ");
	}
	//console.log(newArr);

	let removeUndef = newArr.filter(elem => elem !== undefined);
	//console.log(removeUndef);

	let str2 = newArr.join("");
	//console.log(str2);
	return str2;
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// String.prototype.toJadenCase(
// 	"How can");




/* notes

convert string to array
apply toUpperCase method to each 0 index of the array
convert array back to string

if array index index equals 0 apply toUpperCase method
else push 

*/