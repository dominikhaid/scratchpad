Var = 10 -- global
print("Global var:", Var) --> 10
do
  local var = 20 -- local
  print("Local var:", var) --> 20
end
print("Global var:", Var) --> 10

A, B, C = 0, 0, 0

print(type("Hello world")) --> string
print(type(10.4 * 3)) --> number
print(type(print)) --> function
print(type(type)) --> function
print(type(true)) --> boolean
print(type(nil)) --> nil

Num = 42 -- All numbers are doubles.
-- Don't freak out, 64-bit doubles have 52 bits for
-- storing exact int values; machine precision is
-- not a problem for ints that need < 52 bits.

S = "walternate" -- Immutable strings like Python.
T = "double-quotes are also fine"
U = [[ Double brackets
       start and end
       multi-line strings.]]
T = nil -- Undefines t; Lua has garbage collection.

print(#S)

-- Undefined variables return nil.
-- This is not an error:
local foo = anUnknownVariable -- Now foo = nil.

local aBoolValue = false

-- Only nil and false are falsy; 0 and '' are true!
if not aBoolValue then
  print("twas false")
end

-- 'or' and 'and' are short-circuited.
-- This is similar to the a?b:c operator in C/js:
local ans = aBoolValue and "yes" or "no" --> 'no'
print(ans)
