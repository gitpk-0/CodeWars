def high(sentence):
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    sentence = sentence.split(" ")
    word_dict = dict()

    for word in sentence:
        word_dict[word] = 0

    # calculate the value of each word
    for word in sentence:
        for letter in word:
            x = alphabet.index(letter)
            word_dict[word] += x + 1

    # sort the dictionary based on value amounts -- descending
    word_dict = sorted(word_dict.items(), key=lambda item:item[1], reverse=True)

    # return the first word in the dict -- the highest value
    return word_dict[0][0]




print(high('man i need a taxi up to ubud')) # 'taxi'
print(high('what time are we climbing up the volcano')) # 'volcano'
print(high('take me to semynak')) # 'semynak'
print(high('aa b')) # 'aa'
print(high('b aa')) # 'b'
print(high('bb d')) # 'bb'
print(high('d bb')) #) #'d'
print(high("aaa b")) # "aaa"