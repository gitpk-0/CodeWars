def disemvowel(string):
    output = ''
    for i in string:
        if (i != 'a' and i != 'e' and i != 'i' and i != 'o' and i != 'u' and 
            i != 'A' and i != 'E' and i != 'I' and i != 'O' and i != 'U'):
            output += i
    return output


print(disemvowel("This website is for losers LOL!")) # Ths wbst s fr lsrs LL!