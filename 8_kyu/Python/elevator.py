def elevator(left, right, call):
    l = abs(left - call)
    r = abs(right - call)
    if (l < r):
        return "left"
    elif (r < l):
        return "right"
    else:
        return "right"
    # current floor left elev, current floor right elev, floor that called elev
    # return elevator closest to called floor
    # if equidistant call right elevator

print(elevator(0, 1, 0))  #, "left")
print(elevator(0, 1, 1))  #, "right")
print(elevator(0, 1, 2))  #, "right")
print(elevator(0, 0, 0))  #, "right")
print(elevator(0, 2, 1))  #, "right")