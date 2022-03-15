import re

pattern = re.compile("User conf")

for i, line in enumerate(
        open('/storage/emulated/0/Documents/github/debian-config/readme.md')):
    for match in re.finditer(pattern, line):
        print(f"Found {match.group()} on line: {i+1}")
