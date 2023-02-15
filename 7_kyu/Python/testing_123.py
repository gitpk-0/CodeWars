def number(lines):
    line_num = dict()

    for i in range(1, len(lines)+1):
        line_num[i] = lines[i-1]

    output = []

    for key,value in line_num.items():
        output.append(f"{key}: {value}")

    return output


print(number([])) # []
print(number(["a", "b", "c"])) # ["1: a", "2: b", "3: c"]