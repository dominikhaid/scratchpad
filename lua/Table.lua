local T = {"b", "c", "d"} --> {[1]="b", [2]="c", [3]="d"}

-- update an entry
T[1] = "a" --> {[1]="a", [2]="c", [3]="d"}

-- add a new item at a specific unoccupied index
T[10] = "j" --> {[1]="a", [2]="c", [3]="d", [10]="j"}

-- add a new item to the end of the last consecutive integer key
table.insert(T, "e") --> {[1]="a", [2]="c", [3]="d", [4],"e", [10]="j"}

-- insert a new item at a specific occupied index
table.insert(T, 2, "b") --> {[1]="a", [2]="b", [3]="c", [4]="d", [5],"e", [10]="j"}

-- T[6] = nil, so the loop stops at T[5]
for index, value in ipairs(T) do
  print(index, value)
end

-- delete a key/value pair by setting the key to nil
T[3] = nil --> {[1]="a", [2]="b", [3]=nil, [4]="d", [5],"e", [10]="j"}

-- remove item from a specific location
table.remove(T, 3) --> {[1]="a", [2]="b", [4]="d", [5],"e", [10]="j"}

local T = {[1] = "a", [2] = "b", [3] = "c", [10] = "j"}
print(table.concat(T, ", ", 2, 3)) --> b, c

local T = {2, 3, 4, 5}
table.move(T, 1, #a, 2) --> T = {2, 2, 3, 4, 5}
T[1] = 1 --> T = {1, 2, 3, 4, 5}

local T = {"John", "Mary", "Thomas"}
-- create a comparison function to sort according to the second letter
local function comp(s1, s2)
  return string.sub(s1, 2, 2) > string.sub(s2, 2, 2)
end
-- sort the table according to this function
table.sort(T, comp) --> T = {John, Thomas, Mary}

-- Tables = Lua's only compound data structure;
--          they are associative arrays.
-- Similar to php arrays or js objects, they are
-- hash-lookup dicts that can also be used as lists.

-- Using tables as dictionaries / maps:

-- Dict literals have string keys by default:
local t = {key1 = "value1", key2 = false}

-- String keys can use js-like dot notation:
print(t.key1) -- Prints 'value1'.
t.newKey = {} -- Adds a new key/value pair.
t.key2 = nil -- Removes key2 from the table.

-- Literal notation for any (non-nil) value as key:
local u = {["@!#"] = "qbert", [{}] = 1729, [6.28] = "tau"}
print(u[6.28]) -- prints "tau"

-- Key matching is basically by value for numbers
-- and strings, but by identity for tables.
local a = u["@!#"] -- Now a = 'qbert'.
local b = u[{}] -- We might expect 1729, but it's nil:
-- b = nil since the lookup fails. It fails
-- because the key we used is not the same object
-- as the one used to store the original value. So
-- strings & numbers are more portable keys.

-- A one-table-param function call needs no parens:
local function h(x)
  print(x.key1)
end
h {key1 = "Sonmi~451"} -- Prints 'Sonmi~451'.

for key, val in pairs(u) do -- Table iteration.
  print(key, val)
end

-- _G is a special table of all globals.
print(_G["_G"] == _G) -- Prints 'true'.

-- Using tables as lists / arrays:

-- List literals implicitly set up int keys:
local v = {"value1", "value2", 1.21, "gigawatts"}
for i = 1, #v do -- #v is the size of v for lists.
  print(v[i]) -- Indices start at 1 !! SO CRAZY!
end
-- A 'list' is not a real type. v is just a table
-- with consecutive integer keys, treated as a list.
