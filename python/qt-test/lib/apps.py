#!/usr/bin/env python3

import os
from glob import glob
import lib.conf.apps_paths as app_paths
import lib.conf.apps_list as app_list
from pathlib import Path
import re

# TODO CHECK IF FILES CLEAN IMPORTS SHOUL NOT BREAK MAYBE DELTE EXISTING FILES BEFORE WIRTE

# NOTE METHOD TO GET A LIST OF ALL APPS


def printAppsPaths():
    return app_paths.apps

# NOTE WRITE ALL APPS (.desktop file) TO FILE


def getApps():
    # TODO WE NEED THE OTHER PATHS HERE
    from pathlib import Path
    home = str(Path.home())
    app_dirs = ["/usr/share/**/*.desktop",
                f"{home}/.local/share/**/*.desktop"]
    apps = []
    for dir in app_dirs:
        apps += glob(dir)

    x = 0
    appsStr = "apps = {"
    for app in apps:
        appsStr += f"'path-{x}':'{app}',"
        x += 1

    appsStr += "}"

    fd = os.open("./lib/conf/apps_paths.py", os.O_RDWR | os.O_CREAT)
    os.write(fd, appsStr.encode('utf-8'))
    os.close(fd)

    return apps

# NOTE get infos from the .desktop files


def getInfo(file):
    fInfo = {"exec": False, "icon": False, 'name': False, 'type': False}
    with open(file) as fd:
        for line in fd:
            if re.match("(.*)(Exec=)(.*)", line):
                fInfo['exec'] = re.sub(
                    r'.*Exec=(?P<name>.*)(\n)', r'\g<name>', line)
            if re.match("(.*)(Icon=)(.*)", line):
                fInfo['icon'] = re.sub(
                    r'.*Icon=(?P<name>.*)(\n)', r'\g<name>', line)
            if re.match("(.*)(Name=)(.*)", line):
                fInfo['name'] = re.sub(
                    r'.*GenericName=(?P<name>.*)(\n)', r'\g<name>', line)
                fInfo['name'] = re.sub(
                    r'.*Name=(?P<name>.*)(\n)', r'\g<name>', line)
            if re.match("(.*)(Type=)(.*)", line):
                fInfo['type'] = re.sub(
                    r'.*Type=(?P<name>.*)(\n)', r'\g<name>', line)

    return fInfo

# NOTE wirte Apps (clean) to file


def wirteAppConfig():
    apps = printAppsPaths()
    appList = []
    appsStr = "apps = ["
    for app in apps:
        appList.append(getInfo(apps[app]))

    # exit()
    for app in appList:
        appsStr += "{"
        for key in app:
            appsStr += f"'{key}': '{app[key]}',"
        appsStr += "},"

    appsStr += "]"

    fd = os.open("./lib/conf/apps_list.py", os.O_RDWR | os.O_CREAT)
    os.write(fd, appsStr.encode('utf-8'))
    os.close(fd)

    return appList

# NOTE get all apps clean


def getAllAppsClean():
    return app_list.apps
