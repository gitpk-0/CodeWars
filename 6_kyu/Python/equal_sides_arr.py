def find_even_index(arr):
    index = 0
    left = 0
    right = 100

    while left != right and index < len(arr):
        try:
            left = sum(arr[0:index])
            right = sum(arr[index+1:len(arr)])
            if left == right:
                return index
            else:
                index += 1
        except IndexError:
            continue
    return -1


print(find_even_index([1,2,3,4,3,2,1])) # 3
print(find_even_index([1,100,50,-51,1,1])) # 1
print(find_even_index([1,2,3,4,5,6])) # -1
print(find_even_index([20,10,30,10,10,15,35])) # 3
print(find_even_index([20,10,-80,10,10,15,35])) # 0
print(find_even_index([10,-80,10,10,15,35,20])) # 6
print(find_even_index(list(range(1,100)))) # -1
print(find_even_index([0,0,0,0,0])) # 0,"Should pick the first index if more cases are valid"
print(find_even_index([-1,-2,-3,-4,-3,-2,-1])) # 3
print(find_even_index(list(range(-100,-1)))) # -1
print(find_even_index([10, -10])) # -1
print(find_even_index([0, 8])) # 1