def rps(p1, p2):
    output = ""
    
    if p1 == p2:
        output = "Draw!"
    elif p1 == 'rock' and p2 == 'scissors':
        output = "Player 1 won!"
    elif p1 == 'scissors' and p2 == 'paper':
        output = "Player 1 won!"
    elif p1 == 'paper' and p2 == 'rock':
        output = "Player 1 won!"
    else:
        output = "Player 2 won!"
    return output


print(rps('rock', 'scissors')) #  "Player 1 won!"
print(rps('scissors', 'rock')) #  "Player 2 won!"
print(rps('rock', 'rock')) #  'Draw!'


# Winning hands 
# rock scissors
# scissors paper
# paper rock