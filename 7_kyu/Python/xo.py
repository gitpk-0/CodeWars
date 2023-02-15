def xo(s):
    new_s = s.lower()
    x = 0
    o = 0
    for char in new_s:
        if char == "x":
            x += 1
        elif char == "o":
            o += 1
    # print(f"X: {x}, O: {o}")
    return x == o


print(xo('xo'))   #, 'True expected')
print(xo('xo0'))   #, 'True expected')
print(xo('xxxoo'))   #, 'False expected')


def xo2(s):
    s = s.lower()
    return s.count('x') == s.count('o')

print(xo2('xo'))   #, 'True expected')
print(xo2('xo0'))   #, 'True expected')
print(xo2('xxxoo'))   #, 'False expected')