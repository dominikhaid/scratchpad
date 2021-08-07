import os
import string
import math
import random
import functions
import functions as fd
from functions import myParamDefault
from functions import *

functions.myFunc()
fd.myParamFunc(50)
myParamDefault()

print(random.randint(1, 10))
print(math.sqrt(4))
print(string.ascii_letters)
print(f"system is {os.name}\n"
      f"folder is  {os.getcwd()}\n"
      )

file = f"{os.getcwd()}/test.txt"
files = os.listdir(os.getcwd())
print(files)

if "test.txt" in files:
    os.remove(file)
