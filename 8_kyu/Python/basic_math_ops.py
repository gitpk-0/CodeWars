import operator

def basic_op(oper, value1, value2):
    ops = {
        "+" : operator.add,
        "-" : operator.sub,
        "*" : operator.mul,
        "/" : operator.truediv,
    }
    
    result = ops[oper](value1, value2)
    return result

print(basic_op('+', 10, 1))
print(basic_op('+', 4, 7))
print(basic_op('-', 15, 18))
print(basic_op('*', 5, 5))
print(basic_op('/', 49, 7))



# without import operator

def basic_op2(operator, value1, value2):
	if operator == '+':
		return value1 + value2
	if operator == '-':
		return value1 - value2
	if operator == '*':
		return value1 * value2
	if operator == '/':
		return value1 / value2


print(basic_op2('+', 10, 1))
print(basic_op2('+', 4, 7))
print(basic_op2('-', 15, 18))
print(basic_op2('*', 5, 5))
print(basic_op2('/', 49, 7))