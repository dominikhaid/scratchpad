# NOTE constant lists
primeNumbers = (2, 3, 5, 7, 11, 13, 17, 19)
print(primeNumbers)

# primeNumbers[0] = 1 # => Error
# primeNumbers += (4) # => Error
primeNumbers += (4,)  # Okay
print(primeNumbers)
