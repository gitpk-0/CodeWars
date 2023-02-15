def increment_string(string):
    count = 0
    for i in string:
        if i.isnumeric():
            count += 1
    return count


    # if string == "":
    #     return "1"
    # elif string == "1":
    #     return "2"
    # elif string[-1].isnumeric():
    #     arr = list(string)
    #     if string[-2].isnumeric() and string[-1] == "9":
    #         if string[-3].isnumeric() and string[-2] == "9":
    #             if string[-4].isnumeric() and string[-3] == "9":
    #                 last_num = int(arr.pop())
    #                 second_last = int(arr.pop())
    #                 third_last = int(arr.pop())
    #                 four_last = int(arr.pop())
    #                 last_num = 0
    #                 second_last = 0
    #                 third_last = 0
    #                 four_last = four_last +1
    #                 arr.append(str(four_last))
    #                 arr.append(str(third_last))
    #                 arr.append(str(second_last))
    #                 arr.append(str(last_num))
    #                 return "".join(arr)

    #             last_num = int(arr.pop())
    #             second_last = int(arr.pop())
    #             third_last = int(arr.pop())
    #             last_num = 0
    #             second_last = 0
    #             third_last = third_last + 1
    #             arr.append(str(third_last))
    #             arr.append(str(second_last))
    #             arr.append(str(last_num))
    #             return "".join(arr)
    #         last_num = int(arr.pop())
    #         second_last = int(arr.pop())
    #         last_num = 0
    #         second_last = second_last + 1
    #         arr.append(str(second_last))
    #         arr.append(str(last_num))
    #         return "".join(arr)
    #     last_num = int(arr.pop())
    #     last_num = last_num + 1
    #     arr.append(str(last_num))
    #     return "".join(arr)
    # else:
    #     arr = list(string)
    #     arr.append("1")
    #     return "".join(arr)


# print(increment_string("foo")) # "foo1")
# print(increment_string("foobar001")) # "foobar002")
# print(increment_string("foobar1")) # "foobar2")
# print(increment_string("foobar00")) # "foobar01")
print(increment_string("foobar99")) # "foobar100")
print(increment_string("foobar099")) # "foobar100")
print(increment_string("foobar09999")) # "foobar10000")
# print(increment_string("")) # "1")
# print(increment_string("1")) # "2")

# Attention: If the number has leading zeros 
# the amount of digits should be considered.