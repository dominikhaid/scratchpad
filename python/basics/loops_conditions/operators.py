print('Zahl: ')
number = eval(input())

if number == 12:
    print('a dozen')
elif number < 12:
    print('smaller then 12')
elif number > 12:
    print('greater then 12')
else:
    print('something')

if not (number >= 13):
    print('smaller then 13')

if number != 13:
    print('number is not 13')

if number > 10 and number < 15:
    print('number between 11 and 14')
    if number == 12 or number < 15:
        print('number exactly 12 or lower then 15')

names = ['Anna', 'Franz', 'Alexander']

if 'Anna' in names:
    print('Anna exists')

if not 'Max' in names:
    print('Max dosent exist')
