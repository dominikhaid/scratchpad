import string


def myFunc():
    print('My first functions')


def myParamFunc(number):
    print(f'the param is {number}')


def myParamDefault(number=10, bool=False):
    print(f"the default for number is {number} the default for {bool}")


def toLower(str=" "):
    return str.lower()


numbers = [1, 45, 60, 78]


def simpleReturn(values):
    return sum(values) / len(values)


average = simpleReturn(numbers)
print(average)


myFunc()
myParamFunc(50)
myParamDefault()
print(toLower("MAX"))

a = "A"
b = "B"


def switchValues(a, b):
    c = a
    a = b
    b = c
    return a, b


a, b = switchValues(a, b)
print(a, b)
