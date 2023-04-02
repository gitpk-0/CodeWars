def move_zeros(lst):
    new_list = []
    count_zeros = 0
    for i in lst:
        if i == 0:
            count_zeros += 1
        else:
            new_list.append(i)

    while count_zeros > 0:
        new_list.append(0)
        count_zeros -= 1

    return new_list
        


print(move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]) == [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])