from math import sqrt

def is_square(n):
    try:
        square_root = sqrt(n)
        if int(square_root) == square_root:
            return True
        else:
            return False
    except:
        return False


print(is_square(-1)) # False, "-1: Negative numbers cannot be square numbers"
print(is_square(0)) # True, "0 is a square number (0 * 0)"
print(is_square(3)) # False, "3 is not a square number"
print(is_square(4)) # True, "4 is a square number (2 * 2)"
print(is_square(25)) # True, "25 is a square number (5 * 5)"