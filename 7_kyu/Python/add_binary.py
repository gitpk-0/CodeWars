def add_binary(a,b):
    num = a + b
    return str(bin(num)[2:])

print(add_binary(1,1))    # "10"
print(add_binary(0,1))    # "1"
print(add_binary(1,0))    # "1"
print(add_binary(2,2))    # "100"
print(add_binary(51,12))  # "111111"