def odd_count(n):
    if (n % 2 == 0):
        return int(n / 2)
    else:
        return int((n - 1) / 2)

print(odd_count(4121322123451298))