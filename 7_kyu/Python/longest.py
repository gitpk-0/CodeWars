def longest(a1, a2):
    arr = []
    for i in a1:
        arr.append(i)

    for i in a2:
        arr.append(i)

    long_arr = []
    for i in arr:
        if i not in long_arr:
            long_arr.append(i)

    long_arr.sort()
    "".join(long_arr)

    return "".join(long_arr)




print(longest("aretheyhere", "yestheyarehere")) 
# "aehrsty"
print(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) 
# "abcdefghilnoprstu"
print(longest("inmanylanguages", "theresapairoffunctions")) 
# "acefghilmnoprstuy"