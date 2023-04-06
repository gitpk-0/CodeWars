def format_duration(seconds):
    if seconds == 0:
        return "now"
    year_seconds = 86400 * 365
    years = int(seconds / year_seconds)
    days_remaining = seconds - (years * year_seconds)
    days = int(days_remaining / 86400)
    hours_remaining = seconds - ((years * year_seconds) + (days * 86400))
    hours = int(hours_remaining / 3600) 
    minutes_remaining = seconds - ((years * year_seconds) + (days * 86400) + (hours * 3600))
    minutes = int(minutes_remaining / 60)
    seconds_remaining = seconds - ((years * year_seconds) + (days * 86400) + (hours * 3600) + (minutes * 60))

    time = [years, days, hours, minutes, seconds_remaining]

    for i in range(0, len(time)):
        if time[i] < 10:
            time[i] = "0" + str(time[i])

    result = f"{time[0]}:{time[1]}:{time[2]}:{time[3]}:{time[4]}"
    parts = result.split(":")

    output = ""
    length = 5 - parts.count("00")
    count = 0
    timeframe = ["year", "day", "hour", "minute", "second"]

    for i in range(0, len(parts)):
        if parts[i] != "00":
            time = int(parts[i])
            if output != "":
                if count == length -1:
                    output +=" and "
                else:
                    output +=", "

            if time > 1:
                output += str(time) + f" {timeframe[i]}s"
                count += 1
            else:
                output += str(time) + f" {timeframe[i]}"
                count += 1

    return output






print(format_duration(1)) # "1 second"
print(format_duration(62)) # "1 minute and 2 seconds"
print(format_duration(120)) # "2 minutes"
print(format_duration(3600)) # "1 hour"
print(format_duration(3662)) # "1 hour, 1 minute and 2 seconds"
print(format_duration(15731080)) # "182 days, 1 hour, 44 minutes and 40 seconds"
print(format_duration(132030240)) # "4 years, 68 days, 3 hours and 4 minutes"
print(format_duration(15731080)) # "182 days, 1 hour, 44 minutes and 40 seconds"
print(format_duration(3301980)) # "38 days, 5 hours and 13 minutes"