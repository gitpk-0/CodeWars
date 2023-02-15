def reverse_words(text):
    text = text.split(" ")
    new_text = []
    for i in text:
        new_text.append(i[::-1])
    return " ".join(new_text)


print(reverse_words('The quick brown fox jumps over the lazy dog.'))
# 'ehT kciuq nworb xof spmuj revo eht yzal .god'
print(reverse_words('apple'))
# 'elppa'
print(reverse_words('a b c d'))
# 'a b c d'
print(reverse_words('double  spaced  words'))
# 'elbuod  decaps  sdrow'