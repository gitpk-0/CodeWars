import math

def comp(array1, array2):
    if array1 == None or array2 == None:
        return False

    if array1 == [] and array2 == []:
        return True

    if array1 == [] or array2 == []:
        return False
    
    for i in array1:
        if pow(i, 2) not in array2:
            return False
        if pow(i, 2) in array2:
            array2.remove(pow(i, 2))
    return True