from tkinter import *

window = Tk()
window.title = "New Window"
window.geometry("500x800")

lab1 = Label(window, text="1")
lab1.grid(row=0, column=0)

lab2 = Label(window, text="2")
lab2.grid(row=0, column=1)

lab3 = Label(window, text="3")
lab3.grid(row=1, column=0)
lab3["padx"] = 10
lab3["pady"] = 10

lab4 = Label(window, text="4").grid(row=1, column=1, padx=20, pady=20)

lab5 = Label(window, text="5")
lab5.grid(row=1, column=3)

window.mainloop()
