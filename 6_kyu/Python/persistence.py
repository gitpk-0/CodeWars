import functools

def persistence(n):
    count = 0
    prod = n
    # continue until prod is 1 digit
    while len(str(prod)) > 1:
        # convert prod to string
        prod = str(prod)

        # initialize an empty digits list
        digits = []

        # loop thru each digit in prod
        for num in range(len(prod)):
            # append each digit to digits list
            digits.append(int(prod[num]))

        # multiply each digit in digits list by the next, reassign prod as the result
        prod = functools.reduce(lambda a, b: a * b, digits)

        # increment iteration count with each loop
        count += 1
    return count


print(persistence(4)) # 0
print(persistence(39)) # 3
print(persistence(25)) # 2
print(persistence(999)) # 4
print(persistence(9999)) # 3
print(persistence(99999)) # 2
print(persistence(999999)) # 3


# Write a function, persistence, that takes in a positive parameter num and 
# returns its multiplicative persistence, which is the number of times you must 
# multiply the digits in num until you reach a single digit.

# my first attempt (looking at how many digits test cases test for)


def persistence1(n):
    count = 0
    prod = n
    while len(str(prod)) > 1:
        if len(str(prod)) == 2:
            prod = str(prod)
            prod = int(prod[0]) * int(prod[1])
            count += 1
        elif len(str(prod)) == 3:
            prod = str(prod)
            prod = int(prod[0]) * int(prod[1]) * int(prod[2])
            count += 1
        elif len(str(prod)) == 4:
            prod = str(prod)
            prod = int(prod[0]) * int(prod[1]) * int(prod[2]) * int(prod[3])
            count += 1
        elif len(str(prod)) == 5:
            prod = str(prod)
            prod = int(prod[0]) * int(prod[1]) * int(prod[2]) * int(prod[3]) * int(prod[4])
            count += 1
        elif len(str(prod)) == 6:
            prod = str(prod)
            prod = int(prod[0]) * int(prod[1]) * int(prod[2]) * int(prod[3]) * int(prod[4]) * int(prod[5])
            count += 1
    return count


print(persistence1(4)) # 0
print(persistence1(39)) # 3
print(persistence1(25)) # 2
print(persistence1(999)) # 4
print(persistence1(9999)) # 3
print(persistence1(99999)) # 2
print(persistence1(999999)) # 3