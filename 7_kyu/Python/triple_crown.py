def triple_crown(receivers):
    global variables
    max_yards = 0
    max_td = 0
    max_recep = 0
    max_yd_rcvr = ''
    max_td_rcvr = ''
    max_rec_rcvr = ''
    triple_crown = ""
    no_winner = "None of them"

    for name, stats in receivers.items():
        yds = stats['Receiving yards']
        tds = stats['Receiving touchdowns']
        rec = stats['Receptions']

        # set the max values for each category
        if (yds > max_yards):
            max_yards = yds
            max_yd_rcvr = name
        
        if (tds > max_td):
            max_td = tds
            max_td_rcvr = name

        if (rec > max_recep):
            max_recep = rec
            max_rec_rcvr = name

        # if multiple receivers have max values in any category 
        #       add both names to the variable
        if (yds == max_yards and max_yd_rcvr != '' and max_yd_rcvr != name):
            max_yd_rcvr += name

        if (tds == max_td and max_td_rcvr != '' and max_td_rcvr != name):
            max_td_rcvr += name

        if (rec == max_recep and max_rec_rcvr != '' and max_rec_rcvr != name):
            max_rec_rcvr += name

    # if a single receiver has max values for all categories -- triple crown
    if (max_yd_rcvr == max_td_rcvr and max_td_rcvr == max_rec_rcvr):
        triple_crown = max_yd_rcvr
    # else return None of them
    else:
        triple_crown = no_winner
    
    return triple_crown



    # # looping through multi-dimensional dictionary
    # for i in receivers:
    #     # i = receiver's name
    #     # print(i)
    #     # receivers[i] = entire stat dictionary for the i'th receiver (keys & values)
    #     # print(receivers[i])
    #     for k in receivers[i]:
    #         # k = key values/categories within the i'th receivers stats dictionary
    #         # print(k)
    #         # receivers[i][k] = values associated with the k'th key
    #         # print(receivers[i][k])
    #         for j in receivers:
    #             # j = receiver's name
    #             # looping through again to test for (in)equality
    #             # print(receivers[i][k]>receivers[j][k])
        






print(triple_crown({
    'Cooper Kupp': 
        {
        'Receiving yards': 1800, 
        'Receiving touchdowns': 18, 
        'Receptions': 117
        },
    'Justin Jefferson': 
        {
        'Receiving yards': 1900, 
        'Receiving touchdowns': 117, 
        'Receptions': 1116
        },
    'Davante Adams':
        {
        'Receiving yards': 170, 
        'Receiving touchdowns': 7, 
        'Receptions': 11
        }
})) # 'Justin Jefferson'


print(triple_crown({
'Cooper Kupp': 
    {
    'Receiving yards': 1950, 
    'Receiving touchdowns': 11, 
    'Receptions': 97}, 
'Justin Jefferson': 
    {
    'Receiving yards': 1536, 
    'Receiving touchdowns': 12, 
    'Receptions': 111}, 
'Davante Adams': 
    {
    'Receiving yards': 1984, 
    'Receiving touchdowns': 19, 
    'Receptions': 115
    }
})) # Davante Adams


print(triple_crown({
'Cooper Kupp': 
    {
    'Receiving yards': 195120, 
    'Receiving touchdowns': 11, 
    'Receptions': 917}, 
'Justin Jefferson': 
    {
    'Receiving yards': 1536, 
    'Receiving touchdowns': 19, 
    'Receptions': 111}, 
'Davante Adams': 
    {
    'Receiving yards': 1984, 
    'Receiving touchdowns': 19, 
    'Receptions': 115}
})) # None of them


print(triple_crown(
{'Cooper Kupp': 
    {'Receiving yards': 1841, 
    'Receiving touchdowns': 20, 
    'Receptions': 116}, 
'Justin Jefferson': 
    {'Receiving yards': 1657, 
    'Receiving touchdowns': 10, 
    'Receptions': 99}, 
'Davante Adams': 
    {'Receiving yards': 1809, 
    'Receiving touchdowns': 18, 
    'Receptions': 116}
})) # None of them