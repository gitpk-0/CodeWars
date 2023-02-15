def factorial(n):
    factorial = 1
    if n < 0 or n > 12:
        raise ValueError
    elif n == 0 or n == 1:
        return 1
    elif n >= 2:
        for i in range(1, n+1):
            factorial = factorial * i
        return factorial



print(factorial(0)) # 1, "factorial for 0 is 1"
print(factorial(1)) # 1, "factorial for 1 is 1"
print(factorial(2)) # 2, "factorial for 2 is 2"
print(factorial(3)) # 6, "factorial for 3 is 6"
print(factorial(16)) # 6, "factorial for 3 is 6"