def binary_array_to_number(arr):
    ind = 0
    power = len(arr) - 1
    result = 0
    for i in arr:
        result += arr[ind] * pow(2, power)
        ind += 1
        power -= 1
    return result



print(binary_array_to_number([0,0,0,1]))  # 1
print(binary_array_to_number([0,0,1,0]))  # 2
print(binary_array_to_number([1,1,1,1]))  # 15
print(binary_array_to_number([0,1,1,0]))  # 6