def expression_matter(a, b, c):
    results = []
    results.append(a + b + c)
    results.append(a + b * c)
    results.append(a * b * c)
    results.append((a * b) * c)
    results.append((a + b) * c)
    results.append(a * (b + c))
    results.append(a * (b * c))
    return max(results)




print(expression_matter(2, 1, 2)) # 6
print(expression_matter(2, 1, 1)) # 4
print(expression_matter(2, 2, 4)) # 16
print(expression_matter(3, 3, 3)) # 27