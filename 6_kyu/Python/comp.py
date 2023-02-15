import math

def comp(array1, array2):
    # print(f"array1 {array1}")
    # print(f"array2 {array2}")
    if array1 == None or array2 == None:
        # print("1")
        return False

    if array1 == [] and array2 == []:
        # print("1.25")
        return True

    if array1 == [] or array2 == []:
        # print("1.5")
        return False
    
    for i in array1:
        # print(i)
        # print(pow(i,2))
        if pow(i, 2) not in array2:
            # print("2")
            return False
        if pow(i, 2) in array2:
            array2.remove(pow(i, 2))
    
    # print("3")
    return True


a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
print(comp(a1, a2))  # True

a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
print(comp(a1, a2))  # False

a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
print(comp(a1, a2))  # False

a1 = [42, 42]
a2 = [42, 42]
print(comp(a1, a2))  # True

a1 = [2, 2, 3]
a2 = [4, 9, 9]
print(comp(a1, a2))  # False

a1 = [-121, -144, 19, -161, 19, -144, 19, -11]
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
print(comp(a1, a2))  # True

a1 = []
a2 = [1]
print(comp(a1, a2))  # False

a1 = []
a2 = []
print(comp(a1, a2))  # True