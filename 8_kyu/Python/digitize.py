def digitize(n):
    return int("".join(sorted(str(n), reverse = True)))



print(digitize(348597))


# my first attempt

# covert num to string
# split string
# push string values to array
# convert string values to numbers

def digitize2(n):
    string = str(n)
    arr = string.split(",")
    return arr
    


print(digitize2(348597))
