def make_negative(number):
    if number < 0:
        return number
    else:
        return number - (number * 2) 


print(make_negative(42))   # -42
print(make_negative(-9))   # -9
print(make_negative(0))    # 0