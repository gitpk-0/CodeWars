def square_digits(num):
    string = str(num)
    output = ''
    for i in string:
        sq = int(i) * int(i)
        output += str(sq)
    return int(output)


print(square_digits(9119))   # 811181
print(square_digits(0))   # 0
print(square_digits(84))   # 811181