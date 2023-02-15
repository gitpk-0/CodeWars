def gimme(input_array):
    sort_arr = sorted(input_array)
    middle = int((len(sort_arr) / 2) + 1) - 1
    
    for i in input_array:        
        if sort_arr[middle] == i:
            return input_array.index(i)






print(gimme([2, 3, 1])) # 0
print(gimme([5, 10, 14])) # 1