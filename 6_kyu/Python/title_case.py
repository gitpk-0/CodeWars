def title_case(title, minor_words=''):
    title = title.split()
    minor_words = minor_words.lower().split()

    output = []
    count = 0

    while count < len(title):
        if len(title) <= 0:
            return ''
        elif title[count].lower() in minor_words and count != 0:
            output.append(title[count].lower())
            count += 1
        else:
            output.append(title[count].title())
            count += 1

    return " ".join(output)

print(title_case('')) 
# ''
print(title_case('a clash of KINGS', 'a an the of')) 
# 'A Clash of Kings'
print(title_case('THE WIND IN THE WILLOWS', 'The In')) 
# 'The Wind in the Willows'
print(title_case('the quick brown fox')) 
# 'The Quick Brown Fox'
print(title_case('First a of in', 'an often into')) 
# 'First A Of In'