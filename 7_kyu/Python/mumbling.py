def accum(string):
    output = ""
    num = 0
    for char in string:
        output += (char*(string.index(char, num)+1)).capitalize()
        if (num == len(string)-1):
            pass
        else:
            output += "-"
        num += 1
    return output

print(accum("abcd"))
# "A-Bb-Ccc-Dddd"
print(accum("ZpglnRxqenU")) 
# "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
print(accum("NyffsGeyylB")) 
# "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"