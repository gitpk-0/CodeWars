import math, numpy

def find_next_square(sq):
    return int(numpy.square(math.sqrt(sq)+1)) if math.sqrt(sq) % 1 == 0 else -1


# if the argument is a perfect square:
# find the square root of the arg: (math.sqrt(sq))
# add 1 to the square root of input: +1
# square the result of math.sqrt(sq)+1: numpy.square()
# convert result to integer: int()
# else: return -1


print(find_next_square(121))          # 144
print(find_next_square(625))          # 676
print(find_next_square(319225))       # 320356
print(find_next_square(15241383936))  # 15241630849
print(find_next_square(120))  # 15241630849


# print(math.sqrt(121) % 1 == 0)