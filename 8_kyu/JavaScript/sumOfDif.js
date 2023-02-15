function sumOfDifferences(arr) {
  const length = arr.length;
  if (length <= 1) return 0;

  // sort array descending
  let dArr = arr.sort((a,b) => {return a - b}).reverse();
  sum1 = dArr[0] + dArr[1];
  sum2 = dArr[1] + dArr[2];
  dif = sum1 - sum2;
  return Math.abs(dif);
}


console.log(sumOfDifferences([1, 2, 10]))
console.log(sumOfDifferences([10]))
console.log(sumOfDifferences([]))