def sum_two_smallest_numbers(numbers):
    small = min(numbers)
    numbers.remove(small)
    small_2 = min(numbers)
    return small + small_2


print(sum_two_smallest_numbers([5, 8, 12, 18, 22])) # 13
print(sum_two_smallest_numbers([7, 15, 12, 18, 22])) # 19
print(sum_two_smallest_numbers([25, 42, 12, 18, 22])) # 30