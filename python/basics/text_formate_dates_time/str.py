sentence = "Heute scheint die Sonne!"
print(sentence, len(sentence))
print('find e', sentence.find('e')+1)
print('find from right e', sentence.rfind('e')+1)
char = 'e'

if char in sentence:
    print(str(sentence.count(char)) + ' x e')
else:
    print('no ' + char + ' found')


words = sentence.split(' ')
print(words)
sentence = ', '.join(words)
print(sentence)

name = "TIM"
age = 23
sentence = f"Hallo {name.lower()}. Dein Alter {age}"
print(sentence)
sentence = (
    f"Hallo "
    f"{name}"
    f"."
)
print(sentence)
sentence = (
    f"Hallo \n"
    f"{name}\n"
    f".\n"
)
print(sentence)
