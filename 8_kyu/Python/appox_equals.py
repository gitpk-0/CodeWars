def approx_equals(a, b):
    # round a and b arguments to 5 floating points
    a = round(a, 5)
    b = round(b, 5)

    # absolute value of a minus b
    dif = abs(a - b)

    # if dif is less than or equal to 0.001 return true
    if (dif <= 0.001):
        return True
    else:
        return False

# print(approx_equals(123.2345, 123.234501)) # true
# print(approx_equals(-156.24037, -156.24038)) # true
# print(approx_equals(-1.234, -1.233999)) # true
# print(approx_equals(98.7655, 98.7654999)) # true
# print(approx_equals(1456.3652, 1456.3641)) # false
# print(approx_equals(175.9827, 82.25)) # false
# print(approx_equals(-7.28495, -7.28596)) # false


# best solution
def approx_equals_1(a, b):
    return abs(a - b) < 0.001


print(approx_equals_1(123.2345, 123.234501)) # true
print(approx_equals_1(-156.24037, -156.24038)) # true
print(approx_equals_1(-1.234, -1.233999)) # true
print(approx_equals_1(98.7655, 98.7654999)) # true
print(approx_equals_1(1456.3652, 1456.3641)) # false
print(approx_equals_1(175.9827, 82.25)) # false
print(approx_equals_1(-7.28495, -7.28596)) # false