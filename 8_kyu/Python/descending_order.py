def descending_order(num):
	if num > 0:
		# convert num (integer) into a string so it can be sorted
		toString = str(num)
		# print(toString)
		# print(type(toString))
		# sort the string in reverse (descending) order
		sortStr = sorted(toString, reverse = True)
		# print(type(sortStr))
		# the sorted method converted the string to a list
		# convert the list back to a string
		backToStr = ""
		for digit in sortStr:
			backToStr = backToStr + digit
		# finally return the string converted back into an integer
		return int(backToStr)
	else:
		return 0



print(descending_order(51))
print(descending_order(123456789))