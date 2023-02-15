# INCOMPLETE

def expanded_form(num):
    out_zero = len(str(num))
    arr = []
    for i in str(num):
        arr.append(i)

    num_zero = len(arr)-1
    output = str(num)[0]
    while num_zero > 0:

        output.append("0")
        num_zero -= 1


    print(num_zero)
    return arr





# print(expanded_form(12)) # '10 + 2'
# print(expanded_form(42)) # '40 + 2'
# print(expanded_form(635)) # '600 + 30 + 5'
print(expanded_form(70304)) # '70000 + 300 + 4'