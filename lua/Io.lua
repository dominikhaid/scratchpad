local file = io.open("./filename", "r") -- r w a a+ w+ a+
io.close(file)
io.flush()
io.input(file)
for line in io.lines(file) do
  print(line)
end
for line in file:lines() do
  print(line)
end
io.output(file)
io.read("*a", file) --*n *a *l
file:read("*a")
io.tmpfile() --removed when programm ends
io.type(file) -- file
io.write("string", file)
file:write("string")
file:seek("set", 50) --set cur base ,ffset
