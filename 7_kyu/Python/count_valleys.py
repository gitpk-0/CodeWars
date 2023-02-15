def counting_valleys(s):
    start = 0
    count = 0

    arr = []

    for i in s:
        if i == "D":
            start -= 1
            arr.append(start)
        elif i == "U":
            start += 1
            arr.append(start)

    for i in range(0, len(arr)):
        try:
            if arr[i] == -1 and arr[i+1] == 0:
                count += 1
        except:
            continue

    return count




print(counting_valleys('UFFFD')) # 0
print(counting_valleys('DFFFD')) # 0
print(counting_valleys('UFFFU')) # 0
print(counting_valleys('DFFFU')) # 1
print(counting_valleys('UFFDDFDUDFUFU')) # 1
print(counting_valleys('UFFDDFDUDFUFUUFFDDFDUDFUFU')) # 2
print(counting_valleys('UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU')) 
# 3
print(counting_valleys('UFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFU')) 
# 4
print(counting_valleys('UFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFUUFFDDFDUDFUFU')) 
# 6