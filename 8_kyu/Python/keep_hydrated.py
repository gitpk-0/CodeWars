import math

def litres(time):
	return math.trunc(time/2)

print(litres(11.8))
print(litres(6.7))


# without import math

def liters(t):
	return int(t // 2)

print(liters(11.8))