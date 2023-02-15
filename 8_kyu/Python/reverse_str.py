def solution(string):
    return string[::-1]

print(solution("world"))



def solution(string):
    newstring = ""
    letter = len(string) - 1
    for x in string:
        x = string[letter]
        newstring = newstring + x
        letter = letter - 1
    return newstring

print(solution("patrick"))



def solution(string):
    temp = list(string)
    print(temp)
    temp.reverse()
    return ''.join(temp)
    

print(solution("galilea"))
print(solution("La flam"))