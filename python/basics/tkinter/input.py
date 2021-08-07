from tkinter import *

window = Tk()
window.title = "New Window"
window.geometry("500x800")

entry = Entry(window, width=50, borderwidth=2)
entry.pack()

text = Text(window, width=50, borderwidth=2)
text.pack()


def clickOneLine():
    labelOne = Label(window, text=entry.get())
    labelOne.pack()


def clickMoreLines():
    labelTwo = Label(window, text=text.get("1.0", END))
    labelTwo.pack()


btnOne = Button(window, text="one", command=clickOneLine)
btnOne.pack()

btnTwo = Button(window, text="two", command=clickMoreLines)
btnTwo.pack()

window.mainloop()
