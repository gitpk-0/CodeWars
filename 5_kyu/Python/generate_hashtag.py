def generate_hashtag(s):
    return



print(generate_hashtag('Codewars')) 
# '#Codewars', 'Should handle a single word.')
print(generate_hashtag('Codewars      ')) 
# '#Codewars', 'Should handle trailing whitespace.')
print(generate_hashtag('      Codewars')) 
# '#Codewars', 'Should handle leading whitespace.')
print(generate_hashtag('Codewars Is Nice')) 
# '#CodewarsIsNice', 'Should remove spaces.')
print(generate_hashtag('codewars is nice')) 
# '#CodewarsIsNice', 'Should capitalize first letters of words.')
print(generate_hashtag('CoDeWaRs is niCe')) 
# '#CodewarsIsNice', 'Only the first letter of each word should be capitalized in the final hashtag, all other letters must be lower case.')
print(generate_hashtag('c i n')) 
# '#CIN', 'A single letter is considered to be a word of length 2, so should capitalize first letters of words of length 1.')
print(generate_hashtag('codewars  is  nice')) 
# '#CodewarsIsNice', 'Should deal with unnecessary middle spaces.')
print(generate_hashtag('')) 
# False, 'Expected an empty string to return False')
print(generate_hashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat')) 
# False, 'Should return False if the final string is longer than 140 chars.')