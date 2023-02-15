def row_sum_odd_numbers(n):
    row_and_row_len = 1
    current_num = 1
    
    while row_and_row_len <= n:
        arr = []
        while len(arr) < row_and_row_len:
            arr.append(current_num)
            current_num += 2
        row_and_row_len += 1

    return sum(arr)

print(row_sum_odd_numbers(1)) # 1
print(row_sum_odd_numbers(2)) # 8
print(row_sum_odd_numbers(3)) # 27
print(row_sum_odd_numbers(4)) # 64
print(row_sum_odd_numbers(13)) # 2197
print(row_sum_odd_numbers(19)) # 6859
print(row_sum_odd_numbers(41)) # 68921