function isIsogram(string) {
    lstr = string.toLowerCase();
    for (let i = 0; i < lstr.length; i++) {
        for (let j = 0; j < lstr.length; j++){
            if (i != j && lstr[i] == lstr[j])
                return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"))   //, True )
console.log(isIsogram("isogram"))   //, True )
console.log(isIsogram("aba"))   //, False, "same chars may not be adjacent" )
console.log(isIsogram("moOse"))  // False, "same chars may not be same case" )
console.log(isIsogram("isIsogram"))   //, False )
console.log(isIsogram(""))   //, True, 