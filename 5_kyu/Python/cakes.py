def cakes(recipe, available):
    print(f"Recipe 0: {recipe}")
    print(f"Available 0: {available}")
    for i in recipe:
        print(i)
        if i not in available:
            return 0
        else:
            subt = recipe.get(i)
            curr = available.get(i)
            available.update({i:curr - subt})
        print(f"Recipe: {recipe}")
        print(f"Available: {available}")
            # print(available.get(i) = available.get(i) - recipe.get(i))


    return 99





recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1201, "sugar": 1200, "eggs": 5, "milk": 200}
print(cakes(recipe, available)) # 2

# recipe = {"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}
# available = {"sugar": 500, "flour": 2000, "milk": 2000}
# print(cakes(recipe, available)) # 0