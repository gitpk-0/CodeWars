def solve_runes(runes):
    out = ""

    for i in range(0, 10):
        try:
            x = runes.replace("?", str(i))
            eq_ind = x.index("=")
            if '*' in x: # multiply
                arr = organize(x, eq_ind, "*")
                if final_checks(arr, i, runes):
                    out = i
                    break
            else: # add or subtract
                if '+' in x: # add
                    arr = organize(x, eq_ind, "+")
                    if final_checks(arr, i, runes):
                        out = i
                        break
                else: # subtract
                    arr = organize(x, eq_ind, "-")
                    if final_checks(arr, i, runes):
                        out = i
                        break
        except:
            print("exception occured")

    if out == "":
        return -1 # error
    else:
        return int(out)

def no_leading_zero(str_num_arr):
    try:
        for i in range(0, len(str_num_arr)):
            num = str_num_arr[i]
            if num == "00":
                return False
            
            if int(num) < 0:
                if num[1] == "0":
                    return False
            else:
                if num[0] == "0" and int(num) != 0:
                    return False
    except:
        "str_num error"
    return True

def organize(x, eq_ind, operator): # string, int, string
    if operator == "-":
        oper_ind = x.index("-", 1)
    else:
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


def final_checks(arr, i, runes):
    answer = arr[2]
    res = arr[3]

    if res == int(answer) and no_leading_zero(arr[:-1]) and str(i) not in runes:
        return True
    
    return False



print(solve_runes("1+1=?")) # 2, "Answer for expression '1+1=?' "
print(solve_runes("123*45?=5?088")) # 6, "Answer for expression '123*45?=5?088' "
print(solve_runes("-5?*-1=5?")) # 0, "Answer for expression '-5?*-1=5?' "
print(solve_runes("19--45=5?")) # -1, "Answer for expression '19--45=5?' "
print(solve_runes("??*??=302?")) # 5, "Answer for expression '??*??=302?' "
print(solve_runes("?*11=??")) # 2, "Answer for expression '?*11=??' "
print(solve_runes("??*1=??")) # 2, "Answer for expression '??*1=??' "
print(solve_runes("?8?170-1?6256=7?2?14")) # 9 
print(solve_runes("-7715?5--484?00=-28?9?5")) # 6
print(solve_runes("1?*1?=1??")) # 0
print(solve_runes("-3695+83727=8??32")) # 0 
print(solve_runes("?860-82862=-?5002")) # 7 
print(solve_runes("-6228-?2267=-?8495")) # 1
print(solve_runes("123?45*?=?")) # 0