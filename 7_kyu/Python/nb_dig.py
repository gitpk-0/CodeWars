def nb_dig(n, d):
    arr = []
    count = 0

    for i in range(0, n+1):
        arr.append(i * i)

    for i in arr:
        a = list(str(i))
        for i in a:
            if i == str(d):
                count += 1

    return count



print(nb_dig(10, 1)) # 4
print(nb_dig(25, 1)) # 11
print(nb_dig(5750, 0)) # 4700
print(nb_dig(11011, 2)) # 9481
print(nb_dig(12224, 8)) # 7733
print(nb_dig(11549, 1)) # 11905