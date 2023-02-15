def maskify(cc):
    if len(cc) > 4:
        mask = ""
        last_4 = cc[len(cc)-4] + cc[len(cc)-3] + cc[len(cc)-2] + cc[len(cc)-1]
        for num in range(0, len(cc)-4):
            mask += "#"
        return mask + last_4
    else:
        return cc



print(maskify("4556364607935616"))
print(maskify("5616"))


def maskify2(cc):
    if len(cc) > 4:
        mask = ""
        last_4 = cc[-4:]
        for num in range(0, len(cc)-4):
            mask += "#"
        return mask + last_4
    else:
        return cc



print(maskify2("4556364607935616"))
print(maskify2("5616"))