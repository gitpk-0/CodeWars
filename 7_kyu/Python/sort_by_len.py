def sort_by_length(arr):
    lengths = dict()

    for string in arr:
        lengths[string] = 0

    for string in arr:
        lengths[string] = len(string)

    sorted_lengths = dict(sorted(lengths.items(), key=lambda item:item[1]))

    output = list(sorted_lengths.keys())
    
    return output


print(sort_by_length(["Telescopes", "Glasses", "Eyes", "Monocles"])) 
# ["Eyes", "Glasses", "Monocles", "Telescopes"]

print(sort_by_length(['beg', 'i', 'life', 'to'])) 
# ['i', 'to', 'beg', 'life']