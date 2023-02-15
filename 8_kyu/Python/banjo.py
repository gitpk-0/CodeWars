def are_you_playing_banjo(name):
    result = name[0].lower() == "r"
    if result:
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"





print(are_you_playing_banjo("martin")) 
# "martin does not play banjo"
print(are_you_playing_banjo("Rikke")) 
# "Rikke plays banjo"
print(are_you_playing_banjo("bravo")) 
# "bravo does not play banjo"
print(are_you_playing_banjo("rolf")) 
# "rolf plays banjo"