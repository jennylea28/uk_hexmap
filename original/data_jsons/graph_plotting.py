import matplotlib
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(196220801)

import json
data_file = open('all-data.json')
data_json = json.load(data_file)

unemp = []
for const in data_json:
    # if float(data_json[const]['youth_unemp_rate']) < 0.1:
        unemp.append((float(data_json[const]['pop_65_percent'])))

fig, ax = plt.subplots()

max = np.max(unemp)
min = np.min(unemp)
inc = (max - min) / 5;

# the histogram of the data
n, bins, patches = ax.hist(unemp, 200, color='skyblue')
# plt.axvline(min + inc, color='red', linestyle='dashed', linewidth=1)
# plt.axvline(min + 2 * inc, color='red', linestyle='dashed', linewidth=1)
# plt.axvline(min + 3 * inc, color='red', linestyle='dashed', linewidth=1)
# plt.axvline(min + 4 * inc, color='red', linestyle='dashed', linewidth=1)

mean = np.mean(unemp)
std = np.std(unemp)
plt.axvline(mean, color='red', linestyle='dashed', linewidth=2)
plt.axvline(mean + 0.5 * std, color='red', linestyle='dashed', linewidth=1)
plt.axvline(mean - 0.5 * std, color='red', linestyle='dashed', linewidth=1)
plt.axvline(mean + 1.5 * std, color='red', linestyle='dashed', linewidth=1)
plt.axvline(mean - 1.5 * std, color='red', linestyle='dashed', linewidth=1)

# Tweak spacing to prevent clipping of ylabel
fig.tight_layout()
plt.show()
