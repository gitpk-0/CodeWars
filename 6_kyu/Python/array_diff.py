def array_diff(a,b):
    new_arr = []
    if a == [] or b == []:
        return a
    else:
        for i in a:
            if i not in b:
                new_arr.append(i)
    return new_arr





print(array_diff([1,2], [1])) # [2]
print(array_diff([1,2,2], [1])) # [2,2]
print(array_diff([1,2,2], [2])) # [1]
print(array_diff([1,2,2], [])) # [1,2,2]
print(array_diff([], [1,2])) # []
print(array_diff([1,2,3], [1, 2])) # [3]