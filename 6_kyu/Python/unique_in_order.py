def unique_in_order(iterable):
    if iterable == "":
        output = []
    else:
        output = [iterable[0]]
        for i in range(1, len(iterable)):
            if iterable[i] != iterable[i-1]:
                output.append(iterable[i])
    return output


print(unique_in_order('AAAABBBCCDAABBB')) 
# ['A','B','C','D','A','B']

print(unique_in_order('A')) 
# ['A']

print(unique_in_order('ABBCcAD')) 
# ['A', 'B', 'C', 'c', 'A', 'D']