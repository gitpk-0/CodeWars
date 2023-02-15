def solution(string, ending):
    x = len(ending)
    y = string[-x:]
    if ending == '':
        return True
    else:
        return ending == y


print(solution('abcde', 'cde'))  # True
print(solution('abcde', 'abc'))  # False
print(solution('abcde', ''))  # True



def solution2(string, ending):
    return string.endswith(ending)


print(solution2('abcde', 'cde'))  # True
print(solution2('abcde', 'abc'))  # False
print(solution2('abcde', ''))  # True