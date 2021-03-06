# -*- encoding: utf-8 -*-
import pandas as pd
import numpy as np
import json


subways = {'x': [], 'y': []}

for i in range(8):
    df = pd.read_csv(f'subway{i + 1}.csv')
    data = df[['경도', '위도']].to_numpy()

    for x, y in data:
        subways['x'].append(x)
        subways['y'].append(y)

with open('subway.json', 'w') as fp:
    json.dump(subways, fp)
