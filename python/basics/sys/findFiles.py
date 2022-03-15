import fnmatch
import os

for file in os.listdir("/storage/emulated/0/Download/"):
 if fnmatch.fnmatch(file.upper(), '*.PDF'):
            print(file)