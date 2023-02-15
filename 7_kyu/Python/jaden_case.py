def to_jaden_case(s):
    words = s.split(" ")
    new_words = []
    for word in words:
        new_words.append(word.capitalize())
    return " ".join(new_words)
        



print(to_jaden_case("How can mirrors be real if our eyes aren't real"))