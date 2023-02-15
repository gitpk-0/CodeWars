def row_weights(array):
    x = y = count = 0
    
    for i in array:
        if count % 2 == 0:
            x += i
        elif count % 2 != 0:
            y += i
        count += 1
        
    return x,y





print(row_weights([80])) # (80,0)
print(row_weights([100,50])) # (100,50)
print(row_weights([100, 51, 50, 100])) # (150,151)
print(row_weights([50,60,70,80])) # (120,140)
print(row_weights([13,27,49])) # (62,27)
print(row_weights([70,58,75,34,91])) # (236,92)
print(row_weights([29,83,67,53,19,28,96])) # (211,164)