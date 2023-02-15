def count_sheep(n):
    sheep = ""
    for i in range(1, n+1):
        sheep += f"{i} sheep..."
    return sheep



# print(count_sheep(0))
print(count_sheep(1))
print(count_sheep(2))
print(count_sheep(3))
print(count_sheep(4))