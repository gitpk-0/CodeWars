function countPositivesSumNegatives(input) {
  let pos = 0;
  let sumNegative = 0;

  if (input == null || input.length < 1)  {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        sumNegative += input[i];
      } else if (input[i] > 0) {
        pos += 1;
      }
    }
    return [pos, sumNegative];
  }
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
// [8, -50]
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
