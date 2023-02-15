def solution(molar_mass1, molar_mass2, given_mass1, given_mass2, volume, temp):
    m1 = molar_mass1
    m2 = molar_mass2
    g1 = given_mass1
    g2 = given_mass2
    v = volume
    t = temp

    p = ((g1/m1 + g2/m2)*t)/v
    return p




print(solution(44, 30, 3, 2, 5, 50))  # 0.7146511212121212
print(solution(60, 20, 10, 30, 10, 100))  # 5.099716666666667
