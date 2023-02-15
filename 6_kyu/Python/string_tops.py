def tops(msg):
    if msg == "":
        return ""

    arr = [msg[1]]

    i = 6
    step = 5
    count = -1

    def find_indices(list_to_check, item_to_find, i):
        indices = []
        for index, value in enumerate(msg):
            if i in indices:
                return indices
            if value == item_to_find:
                indices.append(index)
        return indices

    while i < len(msg):
        try:
            if i in find_indices(msg, msg[i], i):
                arr.append(msg[i])
        except IndexError:
            break
        step += 4
        if count < 0:
            count += 1  
        i = i + step + count

    output = "".join(arr)[::-1]
    return output

print(tops("")) 
# #""
print(tops("12")) 
# #"2"
print(tops("abcdefghijklmnopqrstuvwxyz12345")) 
#"3pgb"     01000121000001232100000001234321000000000123454
#"3pgb"     01000020000000030000000000004000000000000000050
#            1    6       15           28               45
print(tops("abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN")) 
#"M3pgb"

print(tops("abcdefghijklmnopqrstuvwxyz12 6789ABCDEFGHIJKL'N")) 
#"' pgb"
                                                      # 45                   66(first e)             91n                         120x
print(tops("g4o1dywcuaFx6mwqpopp54qwgD9fruzmljqkrji61tql7bf'pimodDEqhmd8v yqsFeeDqACzwEfs6BmDohbhq8ovldny k'jwnxt65AnkDw84 bq3djmDnlxEFw4szbb409r0qD 8qxqmm4phmzDCBr2yBjnxddwpg7 Dk20hnbgpkch42Cl35wymkBj'Atd2rb1sbHsqAd41G1xk8edkzEsd138m'0xx wahgbfbC7d'pd9Em1qdi4DbBhbEqkz9Gffezwl ds16wwdz4dekwbHzksvs G5oh9'6hixi0  3Hox7s7z63aC Hl8nd'bfecqF62j13mz63sFn7'CDojb 7rtj Fpbrgp'7mt2zvBv3z6ghgzpra'bw509uwwibGh938G0lsoqbHAqbuBmdm5lmfu'nukjqCod2HycnAdgqr59cqyFe476BzjhGsGx2hxd6xswt'28fm597m22u0wf2DHqrmuaiut4jhbiEwahb xm3mBgpqHH2yx4G2 ogp'4uliGa'var71bcbdavHpfspwDvyzGqEADfooG2aujCqEHk5zlw2cCD4fw jqzglzt9vddvai8lc'dkCj86'f4ewc2jaHl'x95'6Bin'ikzg7pax15bvqa AmCso1h0H0di8wmwws8b6c8'ujyt Ezqur589a7 Hinumo0CkzjHuqdsaqw dddrspakfn 'czz'pz 8x8kpjlq5EdjClgiqp 3mqnimu FsbzsC3o7E0Hcf87azfs'uGmdbi se024Dsua15AlsCamGpDszy4apgdfsczwt6ojnpvfb33D7zd4DpizoymF wflidbh15mswwHp1smEFbfpzbrC5zcd4ozpGvz8rHD9zaCol4Ca6xx3Hyrwc3d8pycpg5jd5'Gm 5EBqHa B'k'mqz7b lGsx8FrDz5wcscrrocgz'wszGulxpDACvHmHwz6 BHpBzdA'G1x7ff q6b7zErwkqwm1az6z2dB3bzhC"))
# lpAfbHxqwFebAyxnebrqw4


# 1 4 8 12 16
#   5 9 13 17 21 25 29   33  37 41
#             66 91 120 153 190 231


#                                                      3 
#                               p                     2   4
#             g               o   q                 1         
#   b       f   h           n       r             z 
# A   C   E       I       M          S          Y
#       d           j   l             t       x
#                     k                 u   w 
#                                         v
