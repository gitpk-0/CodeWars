def points(games):
    i = 0
    running_score = 0
    while i < len(games):
        split = games[i].split(":")
        x = split[0]
        y = split[1]
        if (x > y):
            running_score += 3
        elif (x < y):
            running_score += 0
        else:
            running_score += 1
        i += 1
    return running_score
        # j = 0
        # while j < len(games[i]) - 1:
        #     print(games[i][j])
        #     j += 1









print(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))  #, 30)
print(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))  #, 10)
print(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']))  #), 0)
print(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']))  #, 15)
print(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']))  #, 12)