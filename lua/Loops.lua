local karlSum = 0
for i = 1, 100 do -- The range includes both ends.
  karlSum = karlSum + i
end

-- Use "100, 1, -1" as the range to count down:
local fredSum = 0
for j = 100, 1, -1 do
  fredSum = fredSum + j
end

-- In general, the range is begin, end[, step].

local num = 5
-- Another loop construct:
repeat
  print("the way of the future")
  num = num - 1
until num == 0
