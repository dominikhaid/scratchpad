import lib.apps as apps

# apps.getApps()
# print(apps.printAppsPaths())
# print(apps.getInfo("/usr/share/applications/lxmusic.desktop"))
# apps.wirteAppConfig()
allApps = apps.getAllAppsClean()
print(allApps)
