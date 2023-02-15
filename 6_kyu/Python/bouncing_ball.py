def bouncing_ball(h, bounce, window):
    if bounce >= 1 or bounce <= 0:
        return -1
    elif h < window or h == window:
        return -1

    seen = 0
    bounces = 0
    while h > window:
        h = h * bounce
        bounces += 1
        seen += 1 

    if bounces == 1:
        return 1
    elif bounces > 1:
        return bounces + seen - 1

print(bouncing_ball(10, 0.6, 10)) # -1
print(bouncing_ball(3, 0.66, 1.5)) # 3
print(bouncing_ball(2, 0.5, 1)) # 1
print(bouncing_ball(3, 0.66, 1.5)) # 3
print(bouncing_ball(30, 0.66, 1.5)) # 15
print(bouncing_ball(30, 0.75, 1.5)) # 21
print(bouncing_ball(3, 1, 1.5)) # -1
