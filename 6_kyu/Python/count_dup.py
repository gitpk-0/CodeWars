def duplicate_count(text):
    count = 0
    text = text.lower()
    text_dict = dict()

    for char in text:
        text_dict[char] = 0

    for char in text:
        if char in text_dict:
            text_dict[char] += 1

    for char, val in text_dict.items():
        if val > 1:
            count += 1
    
    return count




print(duplicate_count("")) # 0
print(duplicate_count("aAb")) # 1
print(duplicate_count("11aa")) # 2
print(duplicate_count("abcde")) # 0
print(duplicate_count("abcdeaa")) # 1
print(duplicate_count("abcdeaB")) # 2
print(duplicate_count("Indivisibilities")) # 2