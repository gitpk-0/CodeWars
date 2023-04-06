def format_duration(seconds):
    # print(seconds)
    if seconds == 0:
        return "now"
    seconds_in_a_year = 86400 * 365
    years = int(seconds / seconds_in_a_year)
    days_remaining = seconds - (years * seconds_in_a_year)
    days = int(days_remaining / 86400)
    hours_remaining = seconds - ((years * seconds_in_a_year) + (days * 86400))
    hours = int(hours_remaining / 3600) 
    minutes_remaining = seconds - ((years * seconds_in_a_year) + (days * 86400) + (hours * 3600))
    minutes = int(minutes_remaining / 60)
    seconds_remaining = seconds - ((years * seconds_in_a_year) + (days * 86400) + (hours * 3600) + (minutes * 60))

    if years < 10:
        years = "0" + str(years)
    if days < 10:
        days = "0" + str(days)
    if hours < 10:
        hours = "0" + str(hours)
    if minutes < 10:
        minutes = "0" + str(minutes)
    if seconds_remaining < 10:
        seconds_remaining = "0" + str(seconds_remaining)

    result = f"{years}:{days}:{hours}:{minutes}:{seconds_remaining}"
    print(result)

    parts = result.split(":")
    # print(parts[0])

    output = ""
    # count = 0

    if parts[0] != "00":
        # count += 1
        years = int(parts[0])
        if years > 1:
            output += str(years) + " years"
        else:
            output += str(years) + " year"

    if parts[1] != "00":
        count += 1
        if output != "":
            if parts[2] == "00" and parts[3] == "00" and parts[4] == "00":
                output += " and "
            else:
                output += ", "
        days = int(parts[1])
        if days > 1:
            output += str(days) + " days"
        else:
            output += str(days) + " day"

    if parts[2] != "00":
        count += 1
        if output != "":
            if count > 1 and parts[3] == "00" and parts[4] == "00":
                output += " and "
            else:
                output += ", "
        hours = int(parts[2])
        if hours > 1:
            output += str(hours) + " hours"
        else:
            output += str(hours) + " hour"
    
    if parts[3] != "00":
        count += 1
        if output != "":
            if count > 1 and parts[4] == "00":
                output += " and "
            else:
                output += ", "
        minutes = int(parts[3])
        if minutes > 1:
            output += str(minutes) + " minutes"
        else:
            output += str(minutes) + " minute"

    if parts[4] != "00":
        if output != "":
            output += " and "
        seconds = int(parts[4])
        if seconds > 1:
            output += str(seconds) + " seconds"
        else:
            output += str(seconds) + " second"

    return output






# print(format_duration(1)) # "1 second"
# print(format_duration(62)) # "1 minute and 2 seconds"
# print(format_duration(120)) # "2 minutes"
# print(format_duration(3600)) # "1 hour" 3301980
# print(format_duration(3662)) # "1 hour, 1 minute and 2 seconds"  
# print(format_duration(15731080)) # "182 days, 1 hour, 44 minutes and 40 seconds"
# print(format_duration(132030240)) # "4 years, 68 days, 3 hours and 4 minutes"
# print(format_duration(15731080)) # "182 days, 1 hour, 44 minutes and 40 seconds"
print(format_duration(3301980)) # "38 days, 5 hours and 13 minutes"