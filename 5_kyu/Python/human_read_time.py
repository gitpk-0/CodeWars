def make_readable(seconds):
    hours = int(seconds / 3600) 
    minutes_remaining = seconds - (hours * 3600)
    minutes = int(minutes_remaining / 60)
    seconds_remaining = seconds - ((hours * 3600) + (minutes * 60))

    if hours < 10:
        hours = "0" + str(hours)
    if minutes < 10:
        minutes = "0" + str(minutes)
    if seconds_remaining < 10:
        seconds_remaining = "0" + str(seconds_remaining)

    return f"{hours}:{minutes}:{seconds_remaining}"



print(make_readable(0)) # "00:00:00"
print(make_readable(5)) # "00:00:05"
print(make_readable(60)) # "00:01:00"
print(make_readable(86399)) # "23:59:59"
print(make_readable(359999)) # "99:59:59"