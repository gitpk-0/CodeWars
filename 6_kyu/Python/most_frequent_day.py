import datetime


def most_frequent_days(year):
    year_end = datetime.datetime(year+1, 1, 1)
    start = datetime.datetime(year, 1, 1)
    days_list = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    days_dict = dict(
        Monday=0,
        Tuesday=0,
        Wednesday=0,
        Thursday=0,
        Friday=0,
        Saturday=0,
        Sunday=0
    )

    while start < year_end:
        days_dict[days_list[start.weekday()]] += 1
        start += datetime.timedelta(days=1)

    max_days = max(days_dict.values())

    output = []

    for i in range(0, 7):
        if days_dict[days_list[i]] == max_days:
            output.append(days_list[i])
    return output


print(most_frequent_days(2427))  # ['Friday']
print(most_frequent_days(2185))  # ['Saturday']
print(most_frequent_days(1770))  # ['Monday']
print(most_frequent_days(1785))  # ['Saturday']
print(most_frequent_days(1984))  # ['Monday', 'Sunday']
print(most_frequent_days(2000))  # ['Saturday', 'Sunday']
