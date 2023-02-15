def double_char(s):
    output = ""
    for letter in s:
        output += letter
        output += letter
    return output



print(double_char("String")) 
# "SSttrriinngg"
print(double_char("Hello World")) 
# # "HHeelllloo  WWoorrlldd"
print(double_char("1234!_ ")) 
# # "11223344!!__  "
