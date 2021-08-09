local num = math.random(1, 100)

if (num < 25) then
  print(string.format("%d < 25", num))
elseif (num < 50) then
  print(string.format("%d < 50", num))
else
  print(string.format("%d >= 50", num))
end
