function lovefunc(flower1, flower2) {
  f1 = flower1
  f2 = flower2

  if ((f1 % 2 == 0 && f2 % 2 != 0) || (f2 % 2 == 0 && f1 % 2 != 0)) {
    return true;
  }
  return false;
}


console.log(lovefunc(1,4)) //  true
console.log(lovefunc(2,2)) // false
console.log(lovefunc(0,1)) //  true
console.log(lovefunc(0,0)) // false