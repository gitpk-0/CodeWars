def decrypt(encrypted_text, n):
    text = encrypted_text
    if text == "":
        return ""
    elif text == None:
        return None
    count = 0
    start = int(len(encrypted_text)/2)
    end = len(encrypted_text)

    while count < n:
        output = []
        for i in range(start, end):
            output.append(text[i])
        
        index = 1
        
        for i in range(0, start):
            output.insert(index, text[i])
            index += 2

        text = output
        count += 1

    return "".join(text)
        





def encrypt(text, n):
    if text == None:
        return None
    elif text == "":
        return ""
    count = 0
    while count < n:
        output = []
        for i in range(len(text)):
            if i % 2 != 0:
                output.append(text[i])

        for i in range(len(text)):
            if i % 2 == 0:
                output.append(text[i])

        text = output
        count += 1
    return "".join(text)


print(encrypt("This is a test!", 0)) # "This is a test!"
print(encrypt("This is a test!", 1)) # "hsi  etTi sats!"
print(encrypt("This is a test!", 2)) # "s eT ashi tist!"
print(encrypt("This is a test!", 3)) # " Tah itse sits!"
print(encrypt("This is a test!", 4)) # "This is a test!"
print(encrypt("This is a test!", -1)) # "This is a test!"
print(encrypt("This kata is very interesting!", 1)) 
# "hskt svr neetn!Ti aai eyitrsig"

print(decrypt("This is a test!", 0)) # "This is a test!"
print(decrypt("hsi  etTi sats!", 1)) # "This is a test!"
print(decrypt("s eT ashi tist!", 2)) # "This is a test!"
print(decrypt(" Tah itse sits!", 3)) # "This is a test!"
print(decrypt("This is a test!", 4)) # "This is a test!"
print(decrypt("This is a test!", -1)) # "This is a test!"
print(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) 
# "This kata is very interesting!"

print(encrypt("", 0)) # ""
print(decrypt("", 0)) # ""
print(encrypt(None, 0)) # None
print(decrypt(None, 0)) # None
