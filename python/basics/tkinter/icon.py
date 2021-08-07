from tkinter import *
from PIL import ImageTk, Image


window = Tk()
window.title = "New Window"
window.geometry("500x800")

# window.iconbitmap("absPath.ico")
image = ImageTk.PhotoImage(Image.open(
    "/home/dominik/tux-work/python/kurs/tkinter/0001.jpg"))
label = Label(window, image=image, width=200, height=200).pack()
window.mainloop()
