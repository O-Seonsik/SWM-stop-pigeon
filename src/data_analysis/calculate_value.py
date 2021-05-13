import json
import math
import numpy as np

start_x, start_y = 126.8, 37.6
end_x, end_y = 127.2, 37.4

xn = 200
yn = 100

value = [[0.0 for _ in range(xn)] for _ in range(yn)]

dx = (end_x - start_x) / xn
dy = (end_y - start_y) / yn

with open('school.json') as json_file:
    school = json.load(json_file)

with open('subway.json') as json_file:
    subway = json.load(json_file)

with open('park.json') as json_file:
    park = json.load(json_file)


def value_function(distance, weight):
    return 1 / (30 * distance + 1 / weight)


def get_distance(x1, y1, x2, y2):
    return math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)


for i in range(100):
    for j in range(200):
        target_x = start_x + (dx * j) + (dx / 2)
        target_y = start_y + (dy * i) + (dy / 2)
        print(target_x, target_y)

        for x, y in zip(school['x'], school['y']):
            d = get_distance(target_x, target_y, x, y)
            value[i][j] += value_function(d, 1)

        for x, y in zip(subway['x'], subway['y']):
            d = get_distance(target_x, target_y, x, y)
            value[i][j] += value_function(d, 1)

        for x, y in zip(park['x'], park['y']):
            d = get_distance(target_x, target_y, x, y)
            value[i][j] += value_function(d, 1)

max_value, min_value = np.max(value), np.min(value)

for i in range(100):
    for j in range(200):
        value[i][j] = (value[i][j] - min_value) / (max_value - min_value)


value_dict = {"data": []}

for i in range(100):
    for j in range(200):
        x1 = start_x + (dx * j)
        y1 = start_y + (dy * i)

        x2 = start_x + (dx * (j + 1))
        y2 = start_y + (dy * (i + 1))
        value_dict['data'].append({"lng1": x1, "lat1": y1, "lng2": x2, "lat2": y2, "value": value[i][j]})

with open('grid.json', 'w') as fp:
    json.dump(value_dict, fp)

point_dict = {'data': []}

for x, y in zip(school['x'], school['y']):
    if start_x <= x <= end_x and end_y <= y <= start_y:
        i = (x - start_x) // dx
        j = (y - start_y) // dy
        point_dict['data'].append({"x": y, "y": x, "value": value[int(j)][int(i)]})

for x, y in zip(subway['x'], subway['y']):
    if start_x <= x <= end_x and end_y <= y <= start_y:
        i = (x - start_x) // dx
        j = (y - start_y) // dy
        point_dict['data'].append({"x": y, "y": x, "value": value[int(j)][int(i)]})

for x, y in zip(park['x'], park['y']):
    if start_x <= x <= end_x and end_y <= y <= start_y:
        i = (x - start_x) // dx
        j = (y - start_y) // dy
        point_dict['data'].append({"x": y, "y": x, "value": value[int(j)][int(i)]})


with open('point.json', 'w') as fp:
    json.dump(point_dict, fp)






