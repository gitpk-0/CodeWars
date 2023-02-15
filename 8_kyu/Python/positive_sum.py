def positive_sum(arr):
    total = 0
    for i in arr:
        if i > 0:
            total += i
    return total






print(positive_sum([1,2,3,4,5]))  # 15
print(positive_sum([1,-2,3,4,5]))  # 13
print(positive_sum([-1,2,3,4,-5]))  # 9