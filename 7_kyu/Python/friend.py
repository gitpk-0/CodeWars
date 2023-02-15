def friend(x):
    friends = []
    for name in x:
        if len(name) == 4:
            friends.append(name)
    return friends


print(friend(["Ryan", "Kieran", "Mark",])) 
# ["Ryan", "Mark"]
print(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) 
# ["Ryan"]
print(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])) 
# ["Jimm", "Cari", "aret"]