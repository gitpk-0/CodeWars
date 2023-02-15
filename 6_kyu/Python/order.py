# INCOMPLETE

def order(sentence):
    words = sentence.split(" ")
    new_list = []
    count = 1
    while count <= len(words):
        for word in words:
            for char in word:
                try:
                    if int(char) == count:
                        x = int(char)
                        new_list.insert(x, word)
                except:
                    pass
        count += 1
    return " ".join(new_list)



print(order("is2 Thi1s T4est 3a"))
# "Thi1s is2 3a T4est"
print(order("4of Fo1r pe6ople g3ood th5e the2"))
# "Fo1r the2 g3ood 4of th5e pe6ople"
print(order(""))
# ""