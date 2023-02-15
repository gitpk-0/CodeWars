def diamond(n):
    # print(n)
    if n < 1 or n % 2 == 0:
        return None

    def print_stars(number):
        output = ""
        for i in range(0, number):
            # print("*", end="")
            output = output + "*"
            return output
        # print("\n", end="")

    def print_spaces(number):
        spaces = " "
        for i in range(0, number-1):
            # print without a new line
            print(" ", end="")
            spaces = spaces + spaces
        return spaces

    def print_diamond(size):
        output = ""
        stars = 1
        spaces = int(size/2)

        for i in range(0, int(size/2)+1):
            output = output + print_spaces(spaces)
            output = output + print_stars(stars)
            output = output + r"\n"
            stars += 2
            spaces -= 1

        stars = size - 2
        spaces = 1

        for i in range(0, int(size/2)):
            output = output + print_spaces(spaces)
            output = output + print_stars(stars)
            output = output + r"\n"
            spaces += 1
            stars -= 2
        return output

    return print_diamond(n)






# print(diamond(1))# "*\n"
# print(di)mond(2)) # None
print(diamond(3))# " *\n***\n *\n"
# print(diamond(5))# "  *\n ***\n*****\n ***\n  *\n"
# print(diamond(0))# None
# print(diamond(-3)) # None