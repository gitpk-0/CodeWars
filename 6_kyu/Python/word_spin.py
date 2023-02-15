def spin_words(sentence):
    split_sent = sentence.split(" ")
    output = []

    for word in split_sent:
        if len(word) < 5:
            output.append(word)
        else:
            output.append(word[::-1])

    return " ".join(output)


print(spin_words("Welcome")) 
# "emocleW"
print(spin_words("to")) 
# "to"
print(spin_words("CodeWars")) 
# "sraWedoC"
print(spin_words("Hey fellow warriors")) 
# "Hey wollef sroirraw"
print(spin_words("This sentence is a sentence")) 
# "This ecnetnes is a ecnetnes"