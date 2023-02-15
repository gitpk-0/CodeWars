def is_isogram(string):
    string = string.lower()
    i = 0
    while i < len(string):
        j = 0
        while j < len(string):
            if i != j and string[i] == string[j]:
                return False
            j += 1
        i += 1
    return True


print(is_isogram("Dermatoglyphics"))   #, True )
print(is_isogram("isogram"))   #, True )
print(is_isogram("aba"))   #, False, "same chars may not be adjacent" )
print(is_isogram("moOse"))  # False, "same chars may not be same case" )
print(is_isogram("isIsogram"))   #, False )
print(is_isogram(""))   #, True, 