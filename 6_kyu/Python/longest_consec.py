def longest_consec(strarr, k):
    longest = ""
    if k == 0 or strarr == [] or k > len(strarr):
        return longest
    elif k == 1:
        for i in strarr:
            if len(i) > len(longest):
                longest = i
    elif k > 1:
        for i in range(0, len(strarr)-1):
            try:
                current = strarr[i:i+k]
                result = ""
                for j in current:
                    result = result + j
                if len(result) > len(longest):
                    longest = result
            except:
                break
    return longest













print(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) 
# "abigailtheta"
print(longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) 
# "oocccffuucccjjjkkkjyyyeehh"
print(longest_consec([], 3), "")
print(longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) 
# "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
print(longest_consec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) 
# "wlwsasphmxxowiaxujylentrklctozmymu"
print(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) 
# ""
print(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) 
# "ixoyx3452zzzzzzzzzzzz"
print(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) 
# ""
print(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) 
# ""