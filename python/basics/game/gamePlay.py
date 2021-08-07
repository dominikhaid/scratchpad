from gameData import *
import random


# Spielfeld erzeugen (Länge, Breite, Schatz-Position X, Schatz-Position Y)
field = Field(10, 10, 9, 8)


# Player erzeugen (Position X, Position Y, hp, Waffe, Waffenstärke)
player = Player(1, 1, 100, "Knüppel", 10)


# Legende ausgeben
def info():
    print(
        '***** Fortbewegung *****\n'
        '"w" : geradeaus gehen\n'
        '"a" : nach links gehen\n'
        '"s" : zurückgehen\n'
        '"d" : nach rechts gehen\n'
        '"f" : kämpfen\n'
        '"z" : Spiel beenden'
    )


def movementHandler(i):
    # Player über das Spielfeld bewegen, solange Spielfeld-Ende nicht erreicht
    if i == "w" and player.yPos < field.height:
        player.yPos += 1
    elif i == "s" and player.yPos > 0:
        player.yPos -= 1
    elif i == "d" and player.xPos < field.width:
        player.xPos += 1
    elif i == "a" and player.xPos > 0:
        player.xPos -= 1
    else:
        print("Du kommst hier nicht weiter.")
        playGame()

    print(f"Deine aktuelle Position: X:{player.xPos} | Y:{player.yPos}")

    if player.xPos == field.treasuryPosX and player.yPos == field.treasuryPosY:
        print("Du hast den Schatz gefunden!")
        exit()
    else:
        eventHandler()


def eventHandler():
    # Unterfunktion fight() (Funktion in der Funktion eventHandler())
    def fight():
        eventRandom = random.randint(1, 3)

        # Gegner ist ein Goblin (Wahrscheinlichkeit 2/3)
        if eventRandom == 1 or eventRandom == 2:
            enemy = Goblin(20, 10)

        # Gegner ist ein Zwerg (Wahrscheinlichkeit 1/3)
        elif eventRandom == 3:
            enemy = Dwarf(30, 20)

        print(f"Verdammt! Ein {enemy.name}!")

        while True:
            print(
                "Kämpfts Du oder läufst Du weg? (Wahrscheinlichkeit, fliehen zu können: 1/3)")
            print(
                f'Drücke "f" für kämpfen. Deine aktuelle Gesundheit: {player.hp}')
            if input() == "f":
                enemy.hp -= player.power
                player.hp -= enemy.power
                print("Du hast Deinem Gegner Schaden zugefügt")
                if enemy.hp < 1:
                    print(f"Du hast den {enemy.name} getötet!")
                    del enemy
                    break
                else:
                    print("Dein Gegner ist noch nicht tot.")
            else:
                eventRandom = random.randint(1, 3)
                if eventRandom == 1:
                    print("Deine Flucht war erfolgreich!")
                    break
                else:
                    print("Du wirst angegriffen!")
                    player.hp -= enemy.power

            # Spiel beenden, wenn Player tot
            if player.hp < 1:
                print("Du hast den Kampf nicht überlebt!")
            else:
                # Game Loop wieder betreten
                playGame()

    # Unterfunktion weapon() (Funktion in der Funktion eventHandler())
    def weapon():
        print("Du hast eine neue Waffe gefunden.")
        newWeapon = ""
        weaponIndex = random.randint(0, len(weapons) - 1)
        newWeapon = list(weapons.keys())[weaponIndex]
        print(f"Die neue Waffe: {newWeapon}")

        if player.power >= list(weapons.values())[weaponIndex]:
            print("So ein Mist! Die Waffe ist schwächer als meine bisherige.")

        else:
            print("Die Waffe wird mir gute Dienste leisten...")
            player.weapon = newWeapon
            player.power = list(weapons.values())[weaponIndex]

    # zufällige Ereignisse steuern
    eventRandom = random.randint(1, 10)
    # 1. Gegner taucht auf (Wahrscheinlichkeit 1/5)
    if eventRandom == 1 or eventRandom == 2:
        fight()
    # 2. Waffe wird gefunden (Wahrscheinlichkeit 1/10)
    elif eventRandom == 3:
        weapon()


def playGame():
    while True:
        print('Was wirst Du tun? ("i" für Eingabe-Info drücken)')
        i = input()
        # Player über das Spielfeld bewegen, solange Spielfeld-Ende nicht erreicht
        if i == "w" or i == "s" or i == "d" or i == "a":
            movementHandler(i)
        elif i == "i":
            info()

        # Spiel beenden, wenn abgebrochen werden soll
        elif i == "z":
            print("Spiel beendet")
            exit()
        else:
            print("Ungültige Eingabe")


playGame()
