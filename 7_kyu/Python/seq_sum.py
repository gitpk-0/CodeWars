def sequence_sum(begin_number, end_number, step):
    one = begin_number
    two = end_number + 1
    seq_sum = 0
    for i in range(one, two, step):
        seq_sum += i
    return seq_sum




print(sequence_sum(2, 6, 2)) # 12
print(sequence_sum(1, 5, 1)) # 15
print(sequence_sum(1, 5, 3)) # 5
print(sequence_sum(0, 15, 3)) # 45
print(sequence_sum(16, 15, 3)) # 0
print(sequence_sum(2, 24, 22)) # 26
print(sequence_sum(2, 2, 2)) # 2
print(sequence_sum(2, 2, 1)) # 2
print(sequence_sum(1, 15, 3)) # 35
print(sequence_sum(15, 1, 3)) # 0