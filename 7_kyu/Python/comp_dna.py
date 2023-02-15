def DNA_strand(dna):
    dna_comp = ""
    for letter in dna:
        if letter == "A":
            dna_comp += "T"
        elif letter == "T":
            dna_comp += "A"
        elif letter == "C":
            dna_comp += "G"
        elif letter == "G":
            dna_comp += "C"
    return dna_comp




print(DNA_strand("AAAA")) # "TTTT","String AAAA is")
print(DNA_strand("ATTGC")) # "TAACG","String ATTGC is")
print(DNA_strand("GTAT")) # "CATA","String GTAT is")


# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).