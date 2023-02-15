def find_short(s):
    words = s.split(" ")
    short = 0
    for word in words:
        if short == 0:
            short = len(word)
        elif len(word) < short:
            short = len(word) 
    return short






print(find_short("bitcoin take over the world maybe who knows perhaps"))  
#, 3)
print(find_short("turns out random test cases are easier than writing out basic ones"))  
#, 3)
print(find_short("lets talk about javascript the best language"))  
#, 3)
print(find_short("i want to travel the world writing code one day"))  
#, 1)
print(find_short("Lets all go on holiday somewhere very cold"))  
#, 2)   
print(find_short("Let's travel abroad shall we"))  
#, 2)