from tkinter import *

window = Tk()
window.title = "New Window"
window.geometry("500x800")


lab1 = Label(window, text="1")
lab2 = Label(window, text="2")
lab3 = Label(window, text="3")
lab4 = Label(window, text="4")
lab5 = Label(window, text="5")

lab1.place(x=10, y=40)
lab2.place(x=10, y=70)
lab3.place(x=10, y=100)
lab4.place(x=80, y=40)
lab5.place(x=80, y=70)

window.mainloop()
