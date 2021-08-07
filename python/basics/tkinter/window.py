from tkinter import *

window = Tk()
window.title = "New Window"
window.geometry("500x500")

label = Label(window, text="Window")
label2 = Label(window, text="is open")
label3 = Label(window, text="end")

label["font"] = "Consolas 10"
label["width"] = 30
label["height"] = 5
label.pack()


label2["bg"] = "#00AF80"
label2["fg"] = "#FFAA80"
label2["font"] = "Consolas 10"
label2["width"] = 30
label2["height"] = 5
label2.pack()


def createLabel():
    label = Label(window, text="NEW LABEL")
    label.pack


btn = Button(window, text="click", command=createLabel, bg="#fcaf88", fg="#ffffff",
             font="Consolas 10", width=30, height=10)
btn.pack()

btnExit = Button(window, text="close", command=window.quit, bg="#fcaf88", fg="#ffffff",
                 font="Consolas 10", width=30, height=10)
btnExit.pack(side="bottom")


label3["font"] = "Consolas 10"
label3["width"] = 30
label3["height"] = 5
label3.pack()

window.mainloop()
