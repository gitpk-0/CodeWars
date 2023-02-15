function digitize(n) {
  // convert n to string
  let str = n.toString();
  // split string by each char
  let arr = str.split("");
  // initialize empty array
  let newArr = [];
  // loop thru arr converting each string to a number
  for (let i = 0; i < arr.length; i++) {
  	newArr.push(Number(arr[i]));
  }
  // return reversed value of newArr
  return newArr.reverse();
}
console.log(digitize(348597));


/* ^ my first attempt

covert num to string
split string
push string values to array
convert string values to numbers

*/

// other solutions

function digitize2(n) {
	return String(n).split('').reverse().map(Number);
}
console.log(digitize2(348597));


function digitize3(n) {
	return n.toString().split('').reverse().map(Number);
}
console.log(digitize3(348597));
