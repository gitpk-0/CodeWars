def min_max(lst):
    return [sorted(lst)[0], sorted(lst)[len(lst)-1]]



print(min_max([1,2,3,4,5])) # [1, 5]
print(min_max([2334454,5])) # [5, 2334454]



def min_max2(lst):
    return [min(lst), max(lst)]

print(min_max2([1,2,3,4,5])) # [1, 5]
print(min_max2([2334454,5])) # [5, 2334454]