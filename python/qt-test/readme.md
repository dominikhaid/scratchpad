---
created: 2021-05-13T20:16:30+02:00
modified: 2021-05-14T10:22:43+02:00
---

# Side Project Phyton

# Desktop Env Switcher

## Views

### Envs

- [ ] List Envs 
- [ ] Start Env
- [ ] Display icon 
- [ ] Maybe color
- [ ] Different view modes like compact




### Edit Env

- [ ] Add Programms to Env
- [ ] Add GitHub to Env
- [ ] maybe show git status
- [ ] maybe push and pull add u update
- [ ] maybe show npm scripts
- [ ] List all Programms on System
- [ ] Add a Terminal command to run on start
- [ ] Add paths
- [ ] Get Desktops





## Specs

### Save Settings
Folder env for each env we write a file 
Maybe a simple txt or even better a 
py


### Notes

```
Get all Programms

scan cara first in init 
rescan Button or every now and then

https://unix.stackexchange.com/questions/344188/list-all-desktop-files-that-appears-in-application-menu


https://unix.stackexchange.com/questions/114075/how-to-get-a-list-of-applications-associated-with-a-file-using-command-line

https://wiki.archlinux.org/title/XDG_MIME_Applications

/usr/share
/usr/share/applications
$HOME/.local/share


$HOME/.local/share/icons
/usr/share/icons
 $HOME/.icons
$XDG_DATA_DIRS/icons
 /usr/share/pixmaps

or absolute

find /path/to/source/package -regex ".*\.\(svg\|png\|xpm\|gif\|ico\)$"

```
Save Programms
{name:a,path:b,icon:c}

```

```
Write env files
{name:a,color:b,programms:{name:a,icon:b},path:d,git:f,env:g}

```

```
Tkinter / qt designer 

Main
Frame
List -> envs -> icon -> edit -> start /stop
Show git state
Button add

Edit / add
Parse envs file
List all Programms -> enable / disable
Add git input
Set project eng from list
Set terminal command


Display svg

https://stackoverflow.com/questions/55943631/putting-svg-images-into-tkinter-frame


```

## links

https://pypi.org/project/system_tray/

https://pypi.org/project/wmctrl/#description

https://doc.qt.io/qtforpython/quickstart.html

https://pythonbasics.org/install-pyqt/


## Notes


```
 chrome-nmmhkkegccagdldgiimedpiccmgmieda-Default.desktop      :arrow_backward::arrow_backward: buffers 
1   #!/usr/bin/env xdg-open                                               
  1 [Desktop Entry]                                                       
  2 Version=1.0                                                           
  3 Terminal=false                                                        
  4 Type=Application                                                      
  5 Name=Chrome Web Store-Zahlungen                                       
  6 Exec=/opt/google/chrome/google-chrome --profile-directory=Default --ap
    p-id=nmmhkkegccagdldgiimedpiccmgmieda                                 
  7 Icon=chrome-nmmhkkegccagdldgiimedpiccmgmieda-Default                  
  8 NoDisplay=true                                                        
  9 StartupWMClass=crx_nmmhkkegccagdldgiimedpiccmgmieda                   
                                                        
 N… :arrow_forward: <kkegccagdldgiimedpiccmgmieda-Default.desktop  :arrow_backward: des…   :arrow_backward: 10% ␊1:1

```


https://doc.qt.io/qt-5/qtquickcontrols-index.html
https://doc.qt.io/qt-5/qtquickcontrols2-customize.html
hhttps://doc.qt.io/qt-5/qtquickcontrols2-examples.htmlttps://doc.qt.io/qt-5/qtquickcontrols2-environment.html
https://doc.qt.io/qt-5/qtquickcontrols2-examples.html
https://doc.qt.io/qt-5/qtquick-tutorials-samegame-samegame1-example.html
https://doc.qt.io/qt-5/stylesheet-examples.html
https://doc.qt.io/qt-5/qmlreference.html
https://doc.qt.io/qt-5/topics-data-storage.html
