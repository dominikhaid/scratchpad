carOne = ['BMW', '530 i', 52000, 245]

for i in carOne:
    print(i)

for i in range(1, -8, -2):
    print(i)

carOne = {'manufacturer': 'BMW', 'buyPrice': 50000, 'ps': 345}

for key in carOne:
    print(carOne[key])

for key, value in carOne.items():
    print('KEY:' + str(key), "VALUE:" + str(value))

i = 0
for key in carOne:
    print(list(carOne.keys())[i])
    i += 1
