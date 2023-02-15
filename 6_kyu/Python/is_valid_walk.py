def is_valid_walk(walk):
    n_s = 0
    e_w = 0

    if len(walk) != 10:
        return False

    for i in walk:
        if i == 'n':
            n_s += 1
        elif i == 's':
            n_s -= 1
        elif i == 'e':
            e_w += 1
        elif i == 'w':
            e_w -= 1

    if (n_s, e_w) == (0,0):
        return True
    else:
        return False


#some test cases for you...
print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s'])) 
# 'True'
print(is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e'])) 
# 'False'
print(is_valid_walk(['w'])) 
# 'False'
print(is_valid_walk(['n','n','n','s','n','s','n','s','n','s'])) 
# 'False'
print(is_valid_walk(['w', 's', 'w', 'w', 'e', 'n', 'e', 'e'])) 
# 'False'
print(is_valid_walk(['e', 's', 's', 'w', 'w', 'n', 'n', 'e'])) 
# 'False'
print(is_valid_walk(['w', 's', 's', 'n', 'e', 'n', 'n', 's'])) 
# 'False'