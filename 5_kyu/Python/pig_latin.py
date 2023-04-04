def pig_it(text):
    arr = text.split(" ")
    out = ""
    for i in arr:
        if i[0].isalpha():
            out += i[1::] + i[0] + "ay "
        else:
            out += i
    if out[len(out) - 1] == " ":
        out = out[:-1]
    return out


print(pig_it('Pig latin is cool'))  # igPay atinlay siay oolcay
print(pig_it('Hello world !'))     # elloHay orldway
print(pig_it('O tempora o mores !'))  # Oay emporatay oay oresmay !