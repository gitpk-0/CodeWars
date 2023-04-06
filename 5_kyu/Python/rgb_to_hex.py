def rgb(r, g, b):
    li = []

    for i in [r, g, b]:
        if i < 0:
            i = 0
        if i > 255:
            i = 255

        li.append(i)

    result = ""
    for i in li:
        try: # number
            hx = int(hex(i)[2:])
            if hx < 10:
                result += f"0{hx}"
            else:
                result += hex(i)[2:].upper()
        except: # letter
            if len(hex(i)[2:]) < 2:
                result += "0"
            result += hex(i)[2:].upper()

    return result




print(rgb(0, 0, 0)) # "000000", "testing zero values"
print(rgb(1, 2, 3)) # "010203", "testing near zero values"
print(rgb(255, 255, 255)) # "FFFFFF", "testing max values"
print(rgb(254, 253, 252)) # "FEFDFC", "testing near max values"
print(rgb(-20, 275, 125)) # "00FF7D", "testing out of range values"
print(rgb(114 ,-216 ,-123)) # 720000
print(rgb(10 ,220 ,-155)) # 0ADC00

