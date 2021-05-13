#-*- encoding: utf-8 -*-
import pandas as pd
import numpy as np
import json

df = pd.read_csv('school.csv')
data = df[['�浵', '����']].to_numpy()

schools = {'x': [], 'y': []}

for x, y in data:
    schools['x'].append(x)
    schools['y'].append(y)

with open('school.json', 'w') as fp:
    json.dump(schools, fp)
f