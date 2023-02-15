def count(string):
    chars = dict()

    for char in string:
        chars[char] = 0

    for char in string:
        chars[char] += 1

    return chars


print(count('aba'))  # {'a': 2, 'b': 1}
print(count(''))  # {}