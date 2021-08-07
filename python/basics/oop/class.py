

class Person():
    name = "alias"
    age = 12
    height = 1.75

    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height

    @staticmethod
    def greeting(self):
        print(f"Hello my name is {self.name}!")


adam = Person("Adam", 21, 1.80)
eve = Person("Eve", 27, 1.70)

adam.greeting(adam)
print(f"Hello from {adam.name} and {eve.name}!")


class Rectangle():
    def __init__(self, width, height):
        # __private
        self.__widht = width
        self.__height = height

    def area(self):
        return self.__widht * self.__height

    def getWidth(self):
        return self.__widht

    def getHeight(self):
        return self.__height

    def setWidth(self, a):
        self.__widht = a

    def setHeight(self, a):
        self.__height = a


rect = Rectangle(50, 80)
print(rect.getWidth(), "cm")
rect.setWidth(25)
print(rect.getWidth(), "cm")
print(rect.area(), "qcm")


class Animal():
    def __init__(self, age, name):
        self.name = name
        self.age = age

    def info(self):
        print(f"Hello my name is {self.name} and i am an animal")


class Cat(Animal):
    def __init__(self, age, name, race):
        super().__init__(age, name)
        self.race = race

    def info(self):
        print(f"Hello i am {self.name} i am a {self.race} cat")

    def meow(self):
        print('MEOW MEOW MEOW!')


myAnimal = Animal(5, 'Animal')
myCat = Cat(10, 'Karl', 'persa')
myAnimal.info()
myCat.info()
myCat.meow()
del myCat
# myCat.meow()  # => Error
