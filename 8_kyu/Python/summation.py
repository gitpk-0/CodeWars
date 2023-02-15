def summation(num):
    total = 0
    if num == 1:
        return num
    else:
        for i in range(1, num + 1):
            total += i
    return total





print(summation(1))    # 1
print(summation(8))    # 36
print(summation(22))   # 253
print(summation(100))  # 5050
print(summation(213))  # 22791