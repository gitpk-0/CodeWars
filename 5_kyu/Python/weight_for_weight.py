def order_weight(strng):
    lst = strng.split(" ")
    this_dict = {}

    for num in lst:
        digits = list(num)
        total = 0
        for digit in digits:
            total += int(digit)
        this_dict[num] = total

    this_dict = sorted(this_dict.items(), key=lambda x:x[1])
    this_dict = dict(this_dict)

    output = ""
    for k in this_dict.keys():
        output += f"{k} "
        
    return output[:-1]
            



# print(order_weight("103 123 4444 99 2000")) # 2000 103 123 4444 99
print(order_weight("2000 10003 1234000 44444444 9999 11 11 22 123")) 
# 11 11 2000 10003 22 123 1234000 44444444 9999
# print(order_weight("")) # 