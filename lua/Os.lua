local time = os.clock()
local date = os.date("%d.%m.%Y")
local diff_time = os.difftime(os.time(), time)
os.execute() -- no argument returns 1/0 if shell is present
os.execute("echo hello")
os.exit(0) -- kill the Lua shell we are in and pass 0 back to parent shell
local home = os.getenv("HOME")
os.execute("echo hello > banana.txt")
os.remove("banana.txt") -- delete file
os.rename("banana.txt", "apple.txt")
os.setlocale("en_US", "all")
os.tmpname() --creates the name /tmp/lua_5xPi18 not opens the file yet
