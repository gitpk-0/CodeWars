import string

alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

def is_pangram(s):
    sentence = s.lower()
    for letter in alphabet:
        if letter in sentence:
            pass
        else:
            return False
    return True



pangram = "The quick, brown fox jumps over the lazy dog!"
print(is_pangram(pangram)) # True


pangram = "Pack my box with five dozen liquor jugs."
print(is_pangram(pangram)) # True

pangram = "Pack my bx wth fve dozen lquor jugs."
print(is_pangram(pangram)) # False