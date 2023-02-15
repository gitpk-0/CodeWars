def symmetric_point(p, q):
    difX = p[0] - q[0]
    difY =  p[1] - q[1]
    newPoint = []
    newPoint.insert(0, q[0] - difX)
    newPoint.insert(1, q[1] - difY)
    return newPoint;

print(symmetric_point([2, 6], [-2, -6]));
print(symmetric_point([10, -10], [-10, 10]));
print(symmetric_point([1, -35], [-12, 1]));
print(symmetric_point([1000, 15], [-7, -214]));
print(symmetric_point([0, 0], [0, 0]));
print(symmetric_point([0,0], [1,1]));



# simplified
def symmetric_point_(p, q):
    return [ 2 * q[0] - p[0], 2 * q[1]- p[1] ]

print(symmetric_point_([2, 6], [-2, -6]));
print(symmetric_point_([10, -10], [-10, 10]));
print(symmetric_point_([1, -35], [-12, 1]));
print(symmetric_point_([1000, 15], [-7, -214]));
print(symmetric_point_([0, 0], [0, 0]));
print(symmetric_point_([0,0], [1,1]));