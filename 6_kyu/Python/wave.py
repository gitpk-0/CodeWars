def wave(people):
    people = people.lower()
    output = []
    
    for i in range(len(people)):
        arr = []
        for j in range(len(people)):
            if i != j and people[j].isalpha():
                arr.append(people[j])
            else:
                arr.append(people[j].upper())

        arr = "".join(arr)
        if arr != arr.lower():
            output.append(arr)
            
    return output







print(wave("hello"))
# result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
print(wave("codewars"))
# # result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
print(wave(""))
# # result = []
print(wave("two words"))
# # result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
print(wave(" gap "))
# # result = [" Gap ", " gAp ", " gaP "]
print(wave("a       b    "))
# # result = ["A       b    ", "a       B    "]
print(wave("this is a few words"))
# # result = ["This is a few words", "tHis is a few words", "thIs is a few words", "thiS is a few words", "this Is a few words", "this iS a few words", "this is A few words", "this is a Few words", "this is a fEw words", "this is a feW words", "this is a few Words", "this is a few wOrds", "this is a few woRds", "this is a few worDs", "this is a few wordS"]
