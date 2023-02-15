def sort_array(source_array):
    odds = []
    
    for i in source_array:
        if i % 2 != 0:
            odds.append(i)
            
    odds = sorted(odds)

    start_at = -1
    
    for j in source_array: 
        if j % 2 == 0:
            odds.insert(source_array.index(j, start_at+1), j)
        start_at += 1
        
    return odds



print(sort_array([5, 3, 2, 8, 1, 4])) 
# [1, 3, 2, 8, 5, 4]
print(sort_array([5, 3, 1, 8, 0])) 
# [1, 3, 5, 8, 0]
print(sort_array([])) 
# []
print(sort_array([8, 5, 3, 1, 8, 0])) 
# [8, 1, 3, 5, 8, 0]


print(sort_array([-40, -3, -36, 13, -13, 38, 1, -22, 5, 36, 23, 27, 37, 40, 42, -48, -5, 29, 8, -15, 11, -31, 37, 2, -20, 37, 8, -15]))
# # [-40, -31, -36, -15, -15, 38, -13, -22, -5, 36, -3, 1, 5, 40, 42, -48, 11, 13, 8, 23, 27, 29, 37, 2, -20, 37, 8, 37]