def high_and_low(numbers):
    arr = numbers.split()
    min = int(arr[0])
    max = int(arr[0])
    for i in arr:
        if (int(i) < min):
            min = int(i)
        if (int(i) > max):
            max = int(i)
    return f"{max} {min}"

print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) # "42 -9"
print(high_and_low("1 2 3")) # "3 1"