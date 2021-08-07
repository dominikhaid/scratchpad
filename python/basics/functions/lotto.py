import random


def lotto():

    def getWinNum():
        winSet = set()

        while len(winSet) < 6:
            winNum = random.randint(1, 69)

            if not winNum in winSet:
                winSet.add(str(winNum))

        return list(winSet)

    winList = getWinNum()

    def playNum():
        i = 1
        numSet = set()
        while i <= 6:
            num = eval(
                input(f'Fiedl {i}: Please input number between 1 and 49: '))

            if num in numSet:
                num = print(
                    'The number you choose is already in use, please provide a new one!')
            elif num < 1 or num > 69:
                num = print(
                    'The number must be between 1 and 69, please provide a new one!')
            else:
                numSet.add(str(num))
                i += 1
        return list(numSet)

    playList = playNum()

    def compareNum(playSet, winNum):
        strikes = list()
        for win in winNum:
            if win in playSet:
                strikes.append(win)
        return strikes

    cmpList = compareNum(playList, winList)

    def gameOver():
        print("\n______________________________\n")
        print(f"Your fields: {', '.join(playList)}")
        print(f"The winning numbers are: {', '.join(winList)}")
        print("______________________________\n")

        if len(cmpList) > 0:
            print(f"You got {len(cmpList)} fields right!\n"
                  f"Your winning numbers are: {', '.join(cmpList)}")

        if len(cmpList) < 1:
            print(f"Sorry you got nothing right!")

    gameOver()


lotto()
