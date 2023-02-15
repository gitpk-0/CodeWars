import re

def printer_error(s):
    error = 0
    total = len(s)
    for letter in s:
        result = re.search("[a-m]+", letter)
        if result == None:
            error += 1
    return f"{error}/{total}"




s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
print(printer_error(s))  # "3/56"
s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
print(printer_error(s))  # "6/60"
s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
print(printer_error(s))  # "11/65"

