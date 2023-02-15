def how_much_i_love_you(nb_petals):
    while nb_petals > 6:
        nb_petals = nb_petals - 6
    else:
        nb_petals = nb_petals - 1   
    pedals = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return pedals[nb_petals]

print(how_much_i_love_you(1)) #"I love you"
print(how_much_i_love_you(2)) #"a little
print(how_much_i_love_you(3)) #"a lot"
print(how_much_i_love_you(4)) #"passionately"
print(how_much_i_love_you(5)) #"madly"
print(how_much_i_love_you(6)) #"not at all"
print(how_much_i_love_you(7)) #"I love you"
print(how_much_i_love_you(8)) #"a little
print(how_much_i_love_you(9)) #"a lot"