import math

def race(v1, v2, g):
    if v2 < v1:
        return None
    v1_fpm = v1 / 60
    v1_fps = v1_fpm / 60
    v2_fpm = v2 / 60
    v2_fps = v2_fpm / 60

    lead = g
    seconds = 0
    while lead > 0:
        lead -= v2_fps - v1_fps
        seconds += 1

    seconds = seconds - 1

    h = math.floor(seconds / 3600)
    m = math.floor((seconds % 3600) / 60)
    s = math.floor(seconds % 60)

    return [h, m, s]


print(race(720, 850, 7)) # [0, 3, 13]
print(race(720, 850, 70)) # [0, 32, 18]
print(race(80, 91, 37)) # [3, 21, 49]
print(race(820, 81, 550)) # None
# print(race(202, 362, 94)) # [0, 35, 15]