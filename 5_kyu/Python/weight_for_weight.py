def order_weight(strng):
    if strng == "":
        return ""
    weights = strng.split(" ")
    w8s_dict = {}

    for weight in weights:
        digits = list(weight)
        total = 0
        for digit in digits:
            total += int(digit)

        try:
            w8s_dict[total].append(int(weight))
            w8s_dict[total] = sorted(w8s_dict[total], key=str) # sort the list alphabetically (integers)
        except:
            w8s_dict[total] = [int(weight)]

    w8s_dict = dict(sorted(w8s_dict.items())) # sort the dict keys

    output = ""

    for v in w8s_dict.values():
        for i in v:
            output += f"{str(i)} "
        
    return output[:-1] # or output.strip()
            



print(order_weight("103 123 4444 99 2000")) # 2000 103 123 4444 99
print(order_weight("2000 10003 1234000 44444444 9999 11 11 22 123")) 
# 11 11 2000 10003 22 123 1234000 44444444 9999
print(order_weight("")) # 