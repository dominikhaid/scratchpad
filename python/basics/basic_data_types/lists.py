names = ['Anna', 'Franz', 'Alexander']
carOne = ['BMW', '530 i', 52000, 245]

print(names)
print(names[0])
# NOTE last element
print(names[-1])
print(names[-2])
# NOTE from to
print(carOne[1:])
print(carOne[1:3])
# NOTE genrate list list
numbers = list(range(10, 101, 10))
print(numbers)

# transform lists
del(carOne[3])
carOne.remove(52000)
carOne.append('Appended')
carOne.insert(1, 'Inserted')
print(carOne)
carOne.clear()
print(carOne)


numbers = [1, 5, 9, 10, 5]
print(len(numbers))
print(sum(numbers))
print(min(numbers))
print(max(numbers))
numbers.sort()
print(numbers)
print(numbers.count((5)))

print(sorted(numbers))
