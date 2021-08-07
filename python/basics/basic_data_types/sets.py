# NOTE like lists but unordered

numbers = {1, 2, 4, 5, 8, 3}
charOne = {'A', 'B', 'C', 'D'}
charTwo = {'C', 'D', 'E', 'F'}
newSet = set()
print(numbers)
# NOTE values are unique
numbers.add(5)
print(numbers)
numbers.add(300)
print(numbers)
# NOTE value has must been set when we use remove
numbers.remove(300)
# NOTE value can be set when we use discard
numbers.discard(5)

# NOTE union
print(charOne | charTwo)
# NOTE diff
print(charOne-charTwo)
# NOTE intersect
print(charOne & charTwo)
# NOTE unique
print(charOne ^ charTwo)
