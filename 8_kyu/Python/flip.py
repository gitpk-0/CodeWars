def flip(d, a):
    # Do some magic
    # d = direction
    # a = array of numbers
    # if d = 'R' sort a -- ascending
    # if d = 'L' sort a -- descending
    if (d == 'R'):
        return sorted(a)
    elif (d == 'L'):
        return sorted(a, reverse = True)


print(flip('R', [3, 2, 1, 2]))
print(flip('L', [3, 2, 1, 2]))
print(flip('L', [1, 4, 5, 3, 5]))
print(flip('R', [1, 4, 5, 3, 5]))


# fewer lines method
def flip_(d, a):
    if (d == 'R'):
        return sorted(a)
    return sorted(a, reverse = True)


# print(flip_('R', [3, 2, 1, 2]))
# print(flip_('L', [3, 2, 1, 2]))
# print(flip_('L', [1, 4, 5, 3, 5]))
# print(flip_('R', [1, 4, 5, 3, 5]))