def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum += pow(i, 2)
    return sum

print(square_sum([1,2]))        #  5
print(square_sum([0, 3, 4, 5])) #  50
print(square_sum([]))           #  0
print(square_sum([-1,-2]))      #  5
print(square_sum([-1,0,1]))     #  2