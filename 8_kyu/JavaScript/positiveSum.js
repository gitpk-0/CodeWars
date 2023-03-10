function positiveSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length +1; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}



console.log(positiveSum([1,2,3,4,5])) // 15
console.log(positiveSum([1,-2,3,4,5])) // 13
console.log(positiveSum([])) // 0
console.log(positiveSum([-1,-2,-3,-4,-5])) // 0
console.log(positiveSum([-1,2,3,4,-5])) // 9