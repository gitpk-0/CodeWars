import re

def same_case(a, b):
    # if any char is not a letter return -1
    reg1 = re.search(r"[^a-zA-Z]+", a)
    reg2 = re.search(r"[^a-zA-Z]+", b)
    if (reg1 is None) and (reg2 is None):
        pass
    else:
        return -1

    arr = [a, b]
    upA = arr[0].upper()
    upB = arr[1].upper()
    lowA = arr[0].lower()
    lowB = arr[1].lower()

    # if both char are same case return 1
    if (a == upA and b == upB) or (a == lowA and b == lowB):
        return 1
    # if both char are letters and dif case return 0
    else:
        return 0
        

print(same_case("nN-", "H"))