def odd_or_even(arr):
    if sum(arr) % 2 != 0:
        return "odd"

    return "even"





print(odd_or_even([0, 1, 2])) # "odd"
print(odd_or_even([0, 1, 3])) # "even"
print(odd_or_even([1023, 1, 2])) # "even"
print(odd_or_even([1023, 1, 1])) # "odd"