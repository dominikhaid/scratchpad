import fnmatch
import os

for file in os.listdir("/home/dominik"):
    if fnmatch.fnmatch(file.upper(), '*.LOG'):
        print(file)
