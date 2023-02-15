def solution(number):
    total = 0
    for i in range(3, number):
        if i % 3 == 0:
            total += i
        elif i % 5 == 0:
            total += i
    return total




print(solution(6)) # 8
print(solution(16)) # 60
print(solution(3)) # 0
print(solution(5)) # 3
print(solution(15)) # 45
print(solution(0)) # 0
print(solution(-1)) # 0
print(solution(10)) # 23
print(solution(20)) # 78
print(solution(200)) # 9168