x = 0

while x <= 100:
    print(x)
    x += 10

i = 1
numbers = []

while i <= 5:
    print('Please input ' + str(i) + ". number")
    numbers.append(eval(input()))
    i += 1

print(numbers)
