import string


def caesarStr(str):
    inStr = list(str)
    charsUpper = string.ascii_uppercase
    charsLower = string.ascii_lowercase
    rtrStr = ""

    for char in inStr:
        upper = charsUpper.find(char)
        lower = charsLower.find(char)

        if upper == 0:
            upper = 1
            rtrStr += charsUpper[-upper]
        elif upper > -1:
            upper += 1
            rtrStr += charsUpper[-upper]

        if lower == 0:
            lower = 1
            rtrStr += charsLower[-lower]
        elif lower > -1:
            lower += 1
            rtrStr += charsLower[-lower]

    return rtrStr


print(caesarStr("AbcDeFg"))
