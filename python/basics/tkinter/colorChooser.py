from tkinter import *
from tkinter import colorchooser

window = Tk()
window.title = "New Window"
window.geometry("500x500")


def pickColor():
    my_color = colorchooser.askcolor()[1]
    colorLabel = Label(window, text=my_color)
    colorLabel.pack()


colorBtn = Button(window, text="Pick a color", command=pickColor)
colorBtn.pack()

window.mainloop()
