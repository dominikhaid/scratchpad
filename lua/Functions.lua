local function fib(n)
  if n < 2 then
    return 1
  end
  return fib(n - 2) + fib(n - 1)
end

-- Closures and anonymous functions are ok:
local function adder(x)
  -- The returned function is created when adder is
  -- called, and remembers the value of x:
  return function(y)
    return x + y
  end
end
local a1 = adder(9)
local a2 = adder(36)
print(a1(16)) --> 25
print(a2(64)) --> 100

-- Returns, func calls, and assignments all work
-- with lists that may be mismatched in length.
-- Unmatched receivers are nil;
-- unmatched senders are discarded.

local x, y, z = 1, 2, 3, 4
-- Now x = 1, y = 2, z = 3, and 4 is thrown away.

local function bar(a, b, c)
  print(a, b, c)
  return 4, 8, 15, 16, 23, 42
end

x, y = bar("zaphod") --> prints "zaphod  nil nil"
-- Now x = 4, y = 8, values 15...42 are discarded.

-- Functions are first-class, may be local/global.
-- These are the same:
function f(x)
  return x * x
end

f = function(x)
  return x * x
end

-- And so are these:
local function g(x)
  return math.sin(x)
end

local g
g = function(x)
  return math.sin(x)
end
-- the 'local g' decl makes g-self-references ok.
-- Trig funcs work in radians, by the way.
-- Calls with one string param don't need parens:
print "hello" -- Works fine.
