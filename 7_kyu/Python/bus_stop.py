def number(bus_stops):
    on_bus = 0
    for i in bus_stops:
        on_bus += i[0]
        on_bus -= i[1]
    return on_bus

print(number([[10,0],[3,5],[5,8]])) # 5
print(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) # 17
print(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])) # 21