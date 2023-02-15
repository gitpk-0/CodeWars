def is_palindrome(s):
    # using a slice that steps backwards (-1)
    # converting string to lowercase
    # testing for equality
    return s.lower()[::-1] == s.lower()

print(is_palindrome("aba1"))
print(is_palindrome("aba"))
print(is_palindrome("Abba"))