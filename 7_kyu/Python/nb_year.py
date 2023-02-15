def nb_year(p0, percent, aug, p):
    count = 0
    while p0 < p:
        p0 = int(p0 + p0* percent/100 + aug)
        count += 1
    return count




print(nb_year(1500, 5, 100, 5000))            # 15
print(nb_year(1500000, 2.5, 10000, 2000000))  # 10
print(nb_year(1500000, 0.25, 1000, 2000000))  # 94