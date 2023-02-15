def open_or_senior(data):
    output = []
    for age_hand in data:
        age, hand = age_hand
        if age >= 55 and hand > 7:
            output.append("Senior")
        else:
            output.append("Open")
    return output


# using tuple unpacking to separate age and handicap values
# age, hand = age_hand creates two variables: age and hand




print(open_or_senior([(45, 12),(55,21),(19, -2),(104, 20)])) 
                    # ['Open', 'Senior', 'Open', 'Senior']
print(open_or_senior([(16, 23),(73,1),(56, 20),(1, -1)])) 
                    # ['Open', 'Open', 'Senior', 'Open']