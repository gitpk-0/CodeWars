def draw_stairs(n):
    if (n > 0):
        i_w_new_sp = "I\n "
        reg_i = "I"
        space = " "
        stairs = ""
        # i starts at 0
        for i in range(n):
            # if i = n 
            if (i == (n-1)):
                # add reg_i (no new line) to stairs
                stairs += reg_i
            elif (i != n):
                # add i_w_new_sp and space times i to stairs
                stairs += f"{i_w_new_sp}{space * (i)}"
        return stairs

print(draw_stairs(10))