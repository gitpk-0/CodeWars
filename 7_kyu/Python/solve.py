def solve(s):
    upper = 0
    lower = 0
    for i in s:
        if i.isupper():
            upper += 1
        else:
            lower += 1
    if upper > lower:
        return s.upper()
    else:
        return s.lower()




print(solve("code")) # "code"
print(solve("CODe")) # "CODE"
print(solve("COde")) # "code"
print(solve("Code")) # "code"