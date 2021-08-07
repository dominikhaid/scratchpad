carOne = ['BMW', '530 i', 52000, 245]
carTwo = ['BMW', '330 i', 32000, 345]
carList = [carOne, carTwo]
print(carList)
print(carList[0][1])

carOne = {'manufacturer': 'BMW', 'type': '530 i', 'buyPrice': 50000, 'ps': 345}
carOne = {'manufacturer': 'BMW', 'type': '320 d', 'buyPrice': 32000, 'ps': 345}
carListTwo = [carOne, carTwo]
print(carListTwo)
print(carListTwo[0]['type'])
