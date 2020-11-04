'''
This is intended to be the driver class of
the program.
'''

from tkinter import *

class driver:
    # Root
    root = Tk()

    # Label of the window (widget)
    title = Label(root, text='Software Engineering Project')
    title.grid(row=50,column=0)

    # Buttons
    button = Button(root, text='X', padx=25, command=click)
    button.grid()

    def click():
        label2 = Label(root, text='Testing')
        label2.pack()
    # This creates a GUI window
    root.mainloop()
