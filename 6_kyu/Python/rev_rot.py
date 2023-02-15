def rev_rot(strng, sz):
    if sz <=0 or strng == "" or sz > len(strng):
        return "z"
    else:
        count = 0
        output = []
        arr = []

        start = 0
        finish = sz


        for i in range(start, finish):
            if count < sz:
                count += 1
                arr.append(int(strng[i]))
            else:
                break

        new_arr = []
        for i in arr:
            new_arr.append(i * i * i)

        if sum(new_arr) % 2 == 0:
            # reverse the numbers
            arr = arr[::-1]


    return arr[::-1]

# print(rev_rot("1234", 0)) # ""
# print(rev_rot("", 0)) # ""
# print(rev_rot("1234", 5)) # ""
# print(rev_rot("1234", 5)) # ""

s = "733049910872815764"
print(rev_rot(s, 5)) # "330479108928157"