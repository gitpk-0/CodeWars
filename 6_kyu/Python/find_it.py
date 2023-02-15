def find_it(seq):
    seq_dict = dict()

    for i in seq:
        seq_dict[i] = 0

    for i in seq:
        if i in seq_dict:
            seq_dict[i] += 1

    for i in seq_dict.items():
        if i[1] % 2 != 0:
            return i[0]



print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) 
# 5
print(find_it([1,1,2,-2,5,2,4,4,-1,-2,5])) 
# -1
print(find_it([20,1,1,2,2,3,3,5,5,4,20,4,5])) 
# 5
print(find_it([10])) 
# 10
print(find_it([10, 10, 10])) 
# 10
print(find_it([1,1,1,1,1,1,10,1,1,1,1])) 
# 10
print(find_it([5,4,3,2,1,5,4,3,2,10,10])) 
# 1