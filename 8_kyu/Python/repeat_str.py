def repeat_str(repeat, string):
    output = []
    i = 0
    while i < repeat:
        output.append(string)
        i += 1
    return "".join(output)


print(repeat_str(4, 'a'))  #  'aaaa'
print(repeat_str(3, 'hello '))  #  'hello hello hello '
print(repeat_str(2, 'abc'))  #  'abcabc'
    