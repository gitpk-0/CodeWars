def get_middle(s):
    mid = int(len(s)/2)
    if (len(s) % 2 == 0):
        # return middle 2 characters
        return s[mid - 1] + s[mid]
    else:
        # return middle char
        return s[mid]

print(get_middle("test"))  # es
print(get_middle("testing"))  # t
print(get_middle("middle"))  # dd
print(get_middle("A")) # A
print(get_middle("of")) # of