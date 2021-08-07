
class Field():
    def __init__(self, width, heigth, treasuryPosY, treasuryPosX):
        self.width = width
        self.height = heigth
        self.treasuryPosY = treasuryPosY
        self.treasuryPosX = treasuryPosX


class Player():
    def __init__(self, yPos, xPos, hp, weapon, power):
        self.yPos = yPos
        self.xPos = xPos
        self.hp = hp
        self.weapon = weapon
        self.power = power


class Enemy():
    def __init__(self, hp, power):
        self.hp = hp
        self.power = power


class Goblin(Enemy):
    def __init__(self, hp, power):
        super().__init__(hp, power)
        self.hp = hp
        self.power = power
    name = "Goblin"


class Dwarf(Enemy):
    def __init__(self, hp, power):
        super().__init__(hp, power)
        self.hp = hp
        self.power = power
    name = "Dwarf"


weapons = {"Baseballschläger": 12, "Eisenstange": 15, "Schwert": 20}
