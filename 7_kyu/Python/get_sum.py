def get_sum(a,b):
    total = 0
    if a == b:
        return a
    elif a > b:
        for i in range(b,a+1):
            total += i
    else:
        for i in range(a,b+1):
            total += i
    return total

print(get_sum(0, 1)) # 1
print(get_sum(0, -1)) # -1
print(get_sum(0, 3)) # 6
print(get_sum(-1, 3)) # 5
print(get_sum(-359, 130)) # -56105
print(get_sum(0, 10)) # 55
print(get_sum(1, 1)) # 1
print(get_sum(127759, 127759)) # 127759
print(get_sum(5, 9)) # 35