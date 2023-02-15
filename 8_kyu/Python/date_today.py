from datetime import datetime

def is_today(date):
    # passing the date argument to the date() method to remove h,m,s
    # testing if date(y,m,d) is equal to today's date
    #   which also makes use of the date() method to remove h,m,s
    return (date.date() == datetime.today().date())



print(is_today(datetime(2020, 10, 1, 1, 1, 1, 1)))
print(is_today(datetime(2080, 10, 1, 1, 1, 1, 1)))
print(is_today(datetime(2022, 3, 5, 1, 1, 1, 1)))
print(is_today(datetime.today()))




# today = str(date.today())
# print(type(today))

# now = datetime.now()
# print(now)

# date_string = "2022-03-05"
# strToDate = datetime.strptime(date_string, '%Y-%m-%d')
# print(strToDate.today())

# def is_today(date):
#     # converting date argument type from string to datetime
#     #   then removing h,m,s with date() method
#     strToDate = datetime.strptime(date, '%Y-%m-%d').date()
    
#     # testing if the strToDate variable equals today's date
#     if (strToDate == strToDate.today()):
#         return True
#     else:
#         return False