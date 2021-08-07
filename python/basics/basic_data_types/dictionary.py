carOne = {'manufacturer': 'BMW', 'buyPrice': 50000, 'ps': 345}
sweets = {'bobons': 1, 'choclate': 5, 'pancakes': 10, 'jealy beans': 3}
print(carOne)
print(carOne['buyPrice'])

carOne['ps'] = 600
print(carOne['ps'])

print(carOne.values())
print(list(carOne.values())[0])
print(carOne.keys())
del carOne['buyPrice']
print(carOne)
carOne['buyPrice'] = 5
print(carOne)
print(sorted(sweets))

sortedSweetsValues = sorted(sweets.values())
print(sortedSweetsValues)
sortedSweets = {}
for sortedValue in sortedSweetsValues:
    for keySweet in sweets:
        if sortedValue == sweets[keySweet]:
            sortedSweets[keySweet] = sweets[keySweet]

print(sortedSweets)
