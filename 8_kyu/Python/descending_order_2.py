def descending_order(num):
	return int("".join(sorted(str(num), reverse = True)))


# one liner
# str(num) converts num to string
# sorted(str(num), reverse = True) converts string to list and sorts descending
# "".join rejoins the list values and converts it to a single string
# int converts it all back to an integer



print(descending_order(0))
print(descending_order(51))
print(descending_order(123456789))