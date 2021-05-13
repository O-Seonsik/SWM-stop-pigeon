#-*- encoding: utf-8 -*-
import pandas as pd
import numpy as np
import json

df = pd.read_csv('park.csv')
data = df[['X��ǥ(WGS84)', 'Y��ǥ(WGS84)']].to_numpy()

parks = {'x': [], 'y': []}

for x, y in data:
    parks['x'].append(x)
    parks['y'].append(y)

with open('park.json', 'w') as fp:
    json.dump(parks, fp)
