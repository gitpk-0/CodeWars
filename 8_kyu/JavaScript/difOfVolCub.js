function findDifference(a, b) {
  // product of multiplying each element by the next
  let sumA = a[0] * a[1] * a[2];
  let sumB = b[0] * b[1] * b[2];
  
  // finding the difference between each array total
  let dif = sumA - sumB;
  // converting negative to positive
  if (dif < 0) dif = dif * -1;
  return dif;
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));


// using the reduce method
function findDifferenceReduce(a, b) {
  // reduce method receives previous and current arguments for each
  //  element in the array and multiplies them
  //    the prev argument starts with the first element but then becomes
  //      the product of the first iteration of prev * current
  let sumA = a.reduce((prev, current) => prev * current);
  let sumB = b.reduce((prev, current) => prev * current);
  // Math.abs returns the absolute (positive) value of a number
  let dif = Math.abs(sumA - sumB);
  return dif;
}

console.log(findDifferenceReduce([2, 2, 3], [5, 4, 1]));