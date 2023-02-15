def warn_the_sheep(queue):
    i = len(queue) - 1
    sheep = 1
    while i >= 0:
        # if wolf is last index array return message
        if (queue[i] == "wolf" and i == len(queue) - 1):
            return "Pls go away and stop eating my sheep"
        # if wolf equals non-last index, return warning message to sheep in front of it
        elif (queue[i] == "wolf"):
            warn_sheep_n = str(sheep - 1)
            return "Oi! Sheep number " + warn_sheep_n +"! You are about to be eaten by a wolf!"
        # continuing looping until wolf is found, decrease the queue index, increase the sheep index
        else:
            i -= 1
            sheep += 1

    # locate the wolf in the array
        # if the wolf is in the last array element return:
        # "Pls go away and stop eating my sheep"

        # if the wolf is not the last array element return:
        # "Oi! Sheep number (wolf + 1)! You are about to be eaten by a wolf!"

    # for animal in range(len(queue)):
    #     if (animal == "wolf"):

    #     print(queue[animal])

    # print(len(queue))




print(warn_the_sheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']))
print(warn_the_sheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']))
print(warn_the_sheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf']))