from tkinter import *
from PIL import ImageTk, Image


window = Tk()
window.title = "New Window"
window.geometry("500x800")
window["padx"] = 10
window["pady"] = 40

frame = Frame(window, relief="ridge", borderwidth=2)

numberOne = IntVar()
entryOne = Entry(window, width=40, textvariable=numberOne).pack()


option = IntVar()
radioPlus = Radiobutton(frame, text="+", value=1, variable=option).pack()
radioMinus = Radiobutton(frame, text="-", value=2, variable=option).pack()
radioMultiply = Radiobutton(frame, text="*", value=3, variable=option).pack()
radioDivide = Radiobutton(frame, text="/", value=4, variable=option).pack()

frame.pack()

numberTwo = IntVar()
entryTwo = Entry(window, width=38, textvariable=numberTwo).pack()

result = IntVar()
label = Label(window, textvariable=result).pack()


def calculate():
    if option.get() == 1:
        result.set(float(numberOne.get()) + float(numberTwo.get()))
    elif option.get() == 2:
        result.set(float(numberOne.get()) - float(numberTwo.get()))
    elif option.get() == 3:
        result.set(float(numberOne.get()) * float(numberTwo.get()))
    elif option.get() == 4:
        result.set(float(numberOne.get()) / float(numberTwo.get()))


btnResult = Button(window, text="Calculate", command=calculate).pack()

window.mainloop()
