def series_sum(n):
    if n == 0:
        return "0.00"
    elif n == 1:
        return "1.00"
    else:
        answer = 1
        z = 4
        for i in range(2, n+1):
            answer += 1/z
            z += 3
    answer = round(answer, 2)
    return str(f'{answer:.2f}')
    

# using an f-string to inline format the number
# for 2 decimal places using .2f as the format specifier
# this will include trailing zeros


print(series_sum(1)) # "1.00"
print(series_sum(2)) # "1.25"
print(series_sum(3)) # "1.39"
print(series_sum(58)) # "1.39"