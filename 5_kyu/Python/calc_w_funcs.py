def zero(oper, x=0):
    oper(x)
def one(x=1):
    return x 
# def two(): 
# def three(): 
# def four(): 
# def five(): 
# def six(): 
# def seven(): 
# def eight(): 
# def nine(): 

def plus(y):
    return x + y
# def minus(): 
# def times(): 
# def divided_by(): 



print(zero(plus(one()))) # 1
# print(seven(times(five()))) # 35
# print(four(plus(nine()))) # 13
# print(eight(minus(three()))) # 5
# print(six(divided_by(two()))) # 3








# def foo():
#     x = 'hello world'
#     return x  # return 'hello world' would do, too

# foo()
# # print(x)   # NameError - x is not defined outside the function

# y = foo()
# print(f"y: {y}")   # this works

# x = foo()
# print(f"x: {x}")   # this also works, and it's a completely different x than that inside
#            # foo()

# def bar(i):
#     return i

# z = bar(x) # of course, now you can use x as you want
# print(f"z1: {z}")

# z = bar(foo()) # but you don't have to

# print(f"z2: {z}")