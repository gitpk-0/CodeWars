def dna_to_rna(dna):
    rna = ""
    for letter in dna:
        if letter == "T":
            rna += "U"
        else:
            rna += letter
    return rna



print(dna_to_rna("TTTT"))  # "UUUU")
print(dna_to_rna("GCAT"))  # "GCAU")
print(dna_to_rna("GACCGCCGCC"))  # "GACCGCCGCC")