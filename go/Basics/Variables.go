package main

import (
	"fmt"
)

func main() {
	var a string
	var b int
	var c bool

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)

	var d, e = 6, "Hello"
	f, g := 7, "World!"

	fmt.Println(d)
	fmt.Println(e)
	fmt.Println(f)
	fmt.Println(g)

	var (
		h int
		j int    = 1
		k string = "hello"
	)

	fmt.Println(h)
	fmt.Println(j)
	fmt.Println(k)
}
