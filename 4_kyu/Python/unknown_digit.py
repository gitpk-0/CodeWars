def organize(x, eq_ind, operator): # string, int, string
    oper_ind = x.index(operator)
    first_num = int("".join(x[0:oper_ind]))
    second_num = int("".join(x[oper_ind+1:eq_ind]))
    answer = "".join(x[eq_ind+1:])
    match operator:
        case "*":
            res = first_num * second_num
        case "+":
            res = first_num + second_num
        case "-":
            res = first_num - second_num
    return [str(first_num), str(second_num), answer, res]


def solve_runes(runes):
    # print(runes)
    s = runes
    out = ""

    for i in range(0, 10):
        
        try:
            x = s.replace("?", str(i))
            eq_ind = x.index("=")
            # print(x)
            if '*' in x: # multiply
                arr = organize(x, eq_ind, "*")
                first = arr[0]
                second = arr[1]
                answer = arr[2]
                res = arr[3]
                # oper_ind = x.index("*")
                # first = "".join(x[0:oper_ind])
                # print(f"first: {first}")
                # first = int(first)
                # second = "".join(x[oper_ind+1:eq_ind])
                # print(f"second: {second}")
                # second = int(second)
                # answer = "".join(x[eq_ind+1:])
                # print(f"answer: {answer}")
                # res = first * second
                # # print(f"f * s: {res}")
                # # print(res == int(answer))
                nums = [first, second, answer]
                if res == int(answer) and no_leading_zero(arr[:-1]) and str(i) not in s:
                    out = i
                    break
            else: # add or subtract
                if '+' in x: # add
                    oper_ind = x.index("+")
                    first = "".join(x[0:oper_ind])
                    # print(f"first: {first}")
                    first = int(first)
                    second = "".join(x[oper_ind+1:eq_ind])
                    # print(f"second: {second}")
                    second = int(second)
                    answer = "".join(x[eq_ind+1:])
                    # print(f"answer: {answer}")
                    res = first + second
                    # print(f"f * s: {res}")
                    # print(res == int(answer))
                    nums = [str(first), str(second), answer]
                    if res == int(answer) and no_leading_zero(nums) and str(i) not in s:
                        out = i
                        break
                else: # subtract
                    # minus_range = "".join(x[1:])
                    oper_ind = x.index("-", 1)
                    # print(oper_ind)
                    first = "".join(x[0:oper_ind])
                    # print(f"first: {first}")
                    first = int(first)
                    second = "".join(x[oper_ind+1:eq_ind])
                    # print(f"second: {second}")
                    second = int(second)
                    answer = "".join(x[eq_ind+1:])
                    # print(f"answer: {answer}")
                    res = first - second
                    # print(f"f * s: {res}")
                    # print(res == int(answer))
                    nums = [str(first), str(second), answer]
                    if res == int(answer) and no_leading_zero(nums) and str(i) not in s:
                        out = i
                        break
        except:
            print("exception occ")

        

    # print(f"first num: {first_num}")
    # print(f"operator: {oper}")

    if out == "":
        return -1 # error
    else:
        return int(out)

    # return f"Result: {out}"

def no_leading_zero(str_num_arr):
    try:
        # print(str_num_arr)
        for i in range(0, len(str_num_arr)):
            num = str_num_arr[i]
            # print(int(num))
            if num == "00":
                return False
            if int(num) < 0:
                if num[1] == "0":
                    # print("here1")
                    return False
            else:
                if num[0] == "0" and int(num) != 0:
                    # print("here2")
                    return False
    except:
        "str_num error"
    # print("here3")
    return True          




# print(solve_runes("1+1=?")) # 2, "Answer for expression '1+1=?' "
print(solve_runes("123*45?=5?088")) # 6, "Answer for expression '123*45?=5?088' "
# print(solve_runes("-5?*-1=5?")) # 0, "Answer for expression '-5?*-1=5?' "
# print(solve_runes("19--45=5?")) # -1, "Answer for expression '19--45=5?' "
# print(solve_runes("??*??=302?")) # 5, "Answer for expression '??*??=302?' "
# print(solve_runes("?*11=??")) # 2, "Answer for expression '?*11=??' "
# print(solve_runes("??*1=??")) # 2, "Answer for expression '??*1=??' "
# print(solve_runes("?8?170-1?6256=7?2?14")) # 9 
# print(solve_runes("-7715?5--484?00=-28?9?5")) # 6
# print(solve_runes("1?*1?=1??")) # 0
# print(solve_runes("-3695+83727=8??32")) # 0 
# print(solve_runes("?860-82862=-?5002")) # 7 
# print(solve_runes("-6228-?2267=-?8495")) # 1
# print(solve_runes("123?45*?=?")) # 0
