def count_bits(n):
    binary = []

    while int(n) > 0:
        if int(n) % 2 == 0: # even
            binary.append(0)
            n = n / 2
        else: # odd
            binary.append(1)
            n = n / 2
        
    return binary.count(1)


print(count_bits(0))  # 0
print(count_bits(4))  # 1
print(count_bits(7))  # 3
print(count_bits(9))  # 2
print(count_bits(10))  # 2