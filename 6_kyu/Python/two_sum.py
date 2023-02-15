def two_sum(numbers, target):
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if (i != j) and (numbers[i] + numbers[j] == target):
                return [i, j]
    # for i in range(len(numbers)):
    #     for j in range(len(numbers)):
    #         if (i != j) and (numbers[i] + numbers[j] == target):
    #             foo = (i, j)
    #             return foo


print(sorted(two_sum([1,2,3], 4))) # [0,2]
print(sorted(two_sum([1234,5678,9012], 14690))) # [1,2]
print(sorted(two_sum([2,2,3], 4))) # [0,1]