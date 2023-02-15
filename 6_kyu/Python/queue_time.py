def queue_time(customers, n):
    # creates the necessary amount of queues
    queues = [0] * n
    for i in customers:
        # sorts the queues from least to greatest
        queues.sort()
        # adds the next customer to the lowest value queue
        queues[0] += i

    # returns the highest value of the n queues
    return max(queues)





print(queue_time([], 1)) # 0
print(queue_time([5], 1)) # 5
print(queue_time([2], 5)) # 2
print(queue_time([1,2,3,4,5], 1)) # 15
print(queue_time([1,2,3,4,5], 100)) # 5
print(queue_time([2,2,3,3,4,4], 2)) # 9
print(queue_time([2,2,3,3,4,4], 3)) # 6
print(queue_time([43, 4, 46, 6, 35, 38, 20, 29, 17, 15, 38, 17, 29, 8, 19, 1, 42, 20], 5)) 
# 105
print(queue_time([25, 11, 16, 2, 36, 10, 22, 6, 17, 31], 3)) # 78