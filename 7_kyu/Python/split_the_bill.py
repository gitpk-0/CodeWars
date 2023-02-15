def split_the_bill(x):
    total = 0
    for i in x.items():
        total += i[1]

    split = total / len(x)

    # print(x)

    for key, value in x.items():
        update = value - split
        if update != x[key]:
            if int(update) == update:
                x[key] = int(update)
            else:
                x[key] = round(update, 2)
    
    return x


print(split_the_bill({'A': 20, 'B': 15, 'C': 10})) 
# {'A': 5, 'B': 0, 'C': -5}
print(split_the_bill({'A': 40, 'B': 25, 'X': 10})) 
# {'A': 15, 'B': 0, 'X': -15}
print(split_the_bill({'A': 40, 'B': 25, 'C': 10, 'D': 153, 'E': 58})) 
# {'A': -17.2, 'B': -32.2, 'C': -47.2, 'D': 95.8, 'E': 0.8}

print(split_the_bill({'KFPdUJTjeIi': 626172, 'GHJOzJymMF': 404887, 'AQeg': 370835, 'T': 508665, 'Am': 262584, 'zfTPIWfXFReVPsLIfdK': 454325, 'eZNSMcxwLfujcfi': 625096, 'RocXqXAIYUI': 429333, 'htdRZkGUOucdtfNm': 606054, 'u': 87707, 'tDbwaHKtl': 641428, 'dnAWzyEw': 446237, 'anTJvNinCQNOcpRLHU': 354722, 'LGXFfwHJFukMUgsf': 965084, 'IGhfuOJB': 770542, 'lfxM': 637106, 'hGruczfZxLkqxVGHrIUP': 903440}))
# {'KFPdUJTjeIi': 91218.06, 'GHJOzJymMF': -130066.94, 'AQeg': -164118.94, 'T': -26288.94, 'Am': -272369.94, 'zfTPIWfXFReVPsLIfdK': -80628.94, 'eZNSMcxwLfujcfi': 90142.06, 'RocXqXAIYUI': -105620.94, 'htdRZkGUOucdtfNm': 71100.06, 'u': -447246.94, 'tDbwaHKtl': 106474.06, 'dnAWzyEw': -88716.94, 'anTJvNinCQNOcpRLHU': -180231.94, 'LGXFfwHJFukMUgsf': 430130.06, 'IGhfuOJB': 235588.06, 'lfxM': 102152.06, 'hGruczfZxLkqxVGHrIUP': 368486.06}