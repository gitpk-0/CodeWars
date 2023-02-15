def twice_as_old(dad_years_old, son_years_old):
    dad = dad_years_old
    past_dad = dad_years_old
    son = son_years_old
    past_son = son_years_old


    if (son * 2 == dad):
        return 0

    years = 0
    while ((son * 2 != dad) and (past_son * 2 != past_dad)):    
        
        dad += 1
        son += 1
        past_dad -= 1
        past_son -= 1
        years += 1

    return years

print(twice_as_old(36,7))  # 22
print(twice_as_old(55,30)) # 5
print(twice_as_old(42,21)) # 0
print(twice_as_old(22,1))  # 20
print(twice_as_old(29,0))  # 29