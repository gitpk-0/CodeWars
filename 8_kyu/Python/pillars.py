def pillars(num_pill, dist, width):
    # convert dist meters to centimeters
    dist_cm = dist * 100

    while (num_pill >= 1):
        sum_dist = 0
        if (num_pill == 1):
            return sum_dist
        elif(num_pill == 2):
            return dist_cm
        elif(num_pill >= 3):
            sum_dist = ((num_pill - 1) * dist_cm) + ((num_pill - 2) * width)
            return sum_dist

    return 0


print(pillars(1, 10, 10))  # 0
print(pillars(2, 20, 25))  # 2000
print(pillars(11, 15, 30)) # 15270