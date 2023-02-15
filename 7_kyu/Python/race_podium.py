def race_podium(blocks):
    first = blocks // 2
    # print(first)

    second = int(((blocks - first)/2) + 1)
    # print(second)

    third = int(((blocks - first)/2) - 1)
    print(second,first,third)



print(race_podium(11)) # (4,5,2)
print(race_podium(6)) # (2,3,1)
print(race_podium(10)) #(4,5,1)
print(race_podium(100000)) # (33334,33335,33331)
print(race_podium(7)) # (2,4,1)
print(race_podium(8)) # (3,4,1)