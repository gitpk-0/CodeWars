def duplicate_encode(word):
    word = word.lower()
    chars = dict()
    output = ""

    for char in word:
        chars[char] = 0

    for char in word:
        if char in chars:
            chars[char] += 1

    for char in word:
        if chars[char] < 2:
            output = output + "("
        else:
            output = output + ")"

    return output



print(duplicate_encode("din")) # "((("
print(duplicate_encode("recede")) # "()()()"
print(duplicate_encode("Success")) # ")())())"
print(duplicate_encode("(( @")) # "))(("