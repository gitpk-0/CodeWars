function testEven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}



console.log(testEven(0)) // true
console.log(testEven(0.5)) // false
console.log(testEven(1)) // false
console.log(testEven(2)) // true
console.log(testEven(-4)) // true
