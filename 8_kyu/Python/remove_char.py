def remove_char(s):
    new = []
    x = 0
    for char in s:
        if x == 0 or x == len(s)-1:
            pass
        else:
            new.append(char)
        x += 1
    return "".join(new)





print(remove_char('eloquent'))    #  'loquen'
print(remove_char('country'))     #  'ountr'
print(remove_char('person'))      #  'erso'
print(remove_char('place'))       #  'lac'
print(remove_char('ok'))          #  ''
print(remove_char('ooopsss'))     #  'oopss'