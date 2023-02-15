def is_triangle(a, b, c):
    if a < 1 or  b < 1 or c < 1:
        return False
    elif a + b <= c or b + c <= a or a + c <= b:
        return False
    else:
        return True



# A triangle is valid if sum of its two sides is greater than the 
# third side. If three sides are a, b and c, then three 
# conditions should be met. 




print(is_triangle(1, 2, 2)) # True
print(is_triangle(7, 2, 2)) # False
print(is_triangle(1, 2, 3)) # False
print(is_triangle(1, 3, 2)) # False
print(is_triangle(3, 1, 2)) # False
print(is_triangle(5, 1, 2)) # False
print(is_triangle(1, 2, 5)) # False
print(is_triangle(2, 5, 1)) # False
print(is_triangle(4, 2, 3)) # True
print(is_triangle(5, 1, 5)) # True
print(is_triangle(2, 2, 2)) # True
print(is_triangle(-1, 2, 3)) # False
print(is_triangle(1, -2, 3)) # False
print(is_triangle(1, 2, -3)) # False
print(is_triangle(0, 2, 3)) # False