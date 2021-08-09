print(string.upper("The")) --> THE
print(string.lower("ADT")) --> adt
print(string.len("a b c")) --> 5
print(string.find("This is", "is")) --> 3  4
print(string.sub("abcd", 2, 3)) --> bc
print(string.gsub("pen", "e", "i")) --> pin
print(string.rep("ab", 2)) --> abab
print("a" .. ": " .. "b") --> a: b
print(string.reverse("abcd")) --> dcba
print(string.char(98)) --> b
print(string.byte("abc", 2)) --> b

local a, b, c = "string", 1000, 2.718

print(string.format("String: %s", a))
print(string.format("Preceding with blanks: %10s", a))
print(string.format("Signed Integer: %d", b))
print(string.format("Preceding with zeros: %010d", b))
print(string.format("Float: %.2f", c))
print(string.format("Scientific Notation: %.0e", b))

local str = "email me at moon@lua.com for more info"
local pat = "[%w%d%-_]+@[%w%d%-_]+%.[%w%d%-_]+"

print(string.match(str, pat)) --> moon@lua.com

local str = "color:#@(fg)"
local pat = "@%(([^()]+)%)"
local repl = "FF00FF"

print(string.gsub(str, pat, repl)) --> color:#FF00FF
