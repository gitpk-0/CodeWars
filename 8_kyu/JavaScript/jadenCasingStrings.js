String.prototype.toJadenCase = function() {
	//
	console.log(this);

	let arr = String.prototype.split(" ");
	//console.log(arr);
	// let teststr = arr.join(" ");
	// console.log(teststr);
	console.log(arr);

	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i][0].toUpperCase());
		for (let j = 1; j <= arr[i].length; j++) {
			console.log(arr[i][j])
			newArr.push(arr[i][j]);
			if (j == arr[i].length) {
				newArr.push(" ");
			}
		}
		newArr.join(" ");
	}
	//console.log(newArr);

	let removeUndef = newArr.filter(elem => elem !== undefined);
	console.log(removeUndef);

	let str2 = newArr.join("");
	console.log(str2);
};

String.prototype.toJadenCase(
	"How can mirrors be real if our eyes aren't real");

String.prototype.toJadenCase(
	"How can");




/* notes

convert string to array
apply toUpperCase method to each 0 index of the array
convert array back to string

if array index index equals 0 apply toUpperCase method
else push 

"this" must be used when working with String.prototype

*/