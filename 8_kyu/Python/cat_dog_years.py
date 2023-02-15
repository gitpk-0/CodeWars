def human_years_cat_years_dog_years(human_years):
    cat = 15
    dog = 15
    
    if human_years == 2:
        cat += 9
        dog += 9
    elif human_years > 2:
        cat += (human_years * 4) + 1
        dog += (human_years * 5) - 1

    return [human_years, cat, dog]


print(human_years_cat_years_dog_years(1)) # [1, 15, 15]
print(human_years_cat_years_dog_years(2)) # [2, 24, 24]
print(human_years_cat_years_dog_years(3)) # [3, 28, 29]
print(human_years_cat_years_dog_years(10)) # [10, 56, 64]