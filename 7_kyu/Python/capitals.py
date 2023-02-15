def capitals(word):
    arr = []
    count = 0
    for i in word:
        if i == i.upper():
            arr.append(count)
        count += 1
    return arr



print( capitals('CodEWaRs')) # [0,3,4,6]
print(capitals("ceICRxVzRLLMhzwPvirMxPZhnnBG"))
# [2, 3, 4, 6, 8, 9, 10, 11, 15, 19, 21, 22, 26, 27]