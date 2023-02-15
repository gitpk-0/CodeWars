def find_uniq(arr):
    arr_dict = dict()

    for i in arr:
        arr_dict[i] = 0

    for i in arr:
        if i in arr_dict:
            arr_dict[i] += 1

    for i in arr_dict:
        if arr_dict[i] == 1:
            return i


print(find_uniq([ 1, 1, 1, 2, 1, 1 ])) # 2
print(find_uniq([ 0, 0, 0.55, 0, 0 ])) # 0.55
print(find_uniq([ 3, 10, 3, 3, 3 ])) # 10