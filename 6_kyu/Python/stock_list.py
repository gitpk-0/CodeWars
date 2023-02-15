def stock_list(listOfArt, listOfCat):
    art = listOfArt
    cat = listOfCat

    if art == []:
        return ""

    cat_dict = dict()

    for i in cat:
        cat_dict[i] = 0

    for i in art:
        current = i.split()
        first = current[0][0]
        amount = int(current[1])
        if first in cat_dict:
            cat_dict[first] += amount

    output = "("

    for i in cat_dict:
        output = output + i + " " + ": "
        output = output + f"{cat_dict[i]}"
        output = output + ") - ("

    output = output[:-4]
    return output



b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
print(stock_list(b, c)) # "(A : 200) - (B : 1140)"
