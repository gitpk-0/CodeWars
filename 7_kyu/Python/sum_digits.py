def sum_digits(number):
    number = str(number)
    lst = []

    for num in number:
        lst.append(num)

    total = 0
    
    for i in lst:
        if i.isnumeric():
            total += int(i)
    
    return total

print(sum_digits(10)) # 1
print(sum_digits(99)) # 18
print(sum_digits(-32)) # 5