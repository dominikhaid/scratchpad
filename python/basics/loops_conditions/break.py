while True:
    numberOne = eval(input())
    numberTwo = eval(input())
    if numberOne == 0 or numberTwo == 0:
        print('no division through 0')
        continue

    print(str(numberOne) + " / " + str(numberTwo) +
          "=", int(numberOne / numberTwo))

    print('repeat?')
    cond = input()

    if cond == 'n' or cond == 'N':
        break
