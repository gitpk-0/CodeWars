def tower_builder(n_floors):
    output = []
    if n_floors == 1:
        return ['*']
    else:
        space = " "
        star = "*"
        star_count = 1
        loops = 1
        width = 1
        for i in range(2, n_floors+1):
            width += 2

        while loops <= n_floors:
            if star_count == 1:
                spaces = space * ((width - star_count)//2)
                output.append(spaces + star + spaces)
                star_count += 2
                loops += 1
            else:
                spaces = space * ((width - star_count)//2)
                stars = star * star_count
                output.append(spaces + stars + spaces)
                star_count += 2
                loops += 1

    return output




# print(tower_builder(1)) # ['*', ]
# print(tower_builder(2)) # [' * ', '***']
# print(tower_builder(3)) # ['  *  ', ' *** ', '*****']
print(tower_builder(4)) # ['   *   ', '  ***  ', ' ***** ', '*******']