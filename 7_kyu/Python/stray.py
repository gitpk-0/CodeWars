def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i


print(stray([1, 1, 1, 1, 1, 1, 2])) # 2
print(stray([2, 3, 2, 2, 2])) # 3
print(stray([3, 2, 2, 2, 2])) # 3