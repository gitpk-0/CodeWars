def count_smileys(arr):
    valid = [':)',':D', ':-)', ':-D', ';)',';D', ';-)', ';-D', ':~)',':~D', ';~)', ';~D']
    count = 0
    for i in arr:
        if i in valid:
            count += 1
        
    return count # the number of valid smiley faces in array/list


# valid eyes  : or ;
# valid nose  - or ~ (optional)
# valid mouth ) or D

print(count_smileys([])) # 0
print(count_smileys([':D',':~)',';~D',':)'])) # 4
print(count_smileys([':)',':(',':D',':O',':;'])) # 2
print(count_smileys([';]', ':[', ';*', ':$', ';-D'])) # 1