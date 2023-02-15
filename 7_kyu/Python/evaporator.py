def evaporator(content, evap_per_day, threshold):
    content_a = 100
    evap_perc = evap_per_day * .01
    days = 0
    while content_a >= threshold:
        current_evap = content_a * evap_perc 
        content_a -= current_evap
        days += 1

    return days


print(evaporator(10, 10, 10)) # 22
print(evaporator(10, 10, 5)) # 29