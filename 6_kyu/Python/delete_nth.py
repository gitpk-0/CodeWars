def delete_nth(order, max_e):
    # creating a dictionary to store number counts in
    num_dict = dict()

    for num in order:
        num_dict[num] = 0

    arr = []

    for num in order:
        if num in num_dict:
            num_dict[num] += 1
            if num_dict[num] <= max_e:
                arr.append(num)
            else:
                pass
    return arr




print(delete_nth([20,37,20,21], 1)) 
# [20,37,21]
print(delete_nth([1,1,3,3,7,2,2,2,2], 3)) 
# [1, 1, 3, 3, 7, 2, 2, 2]