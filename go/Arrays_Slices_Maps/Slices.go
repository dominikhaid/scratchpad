package main

import (
	"fmt"
)

func main() {
	var a = []int{1, 2, 3}
	b := []int{4, 5, 6, 7, 8}

	fmt.Println("Name\tType\tLength\tCapacity Values")
	fmt.Printf("a\t%T\t%v\t%v\t %v\n", a, len(a), cap(a), a)
	fmt.Printf("b\t%T\t%v\t%v\t %v\n", b, len(b), cap(b), b)

	c := [6]int{9, 10, 11, 12, 13, 14}
	fmt.Println("Name\tType\tLength\tCapacity Values")
	fmt.Printf("b\t%T\t%v\t%v\t %v\n", c, len(c), cap(c), c)

	d := make([]int, 3, 7)
	e := []int{1}
	d = append(d, 20, 21)
	e = append(e, d...)
	fmt.Println("Name\tType\tLength\tCapacity Values")
	fmt.Printf("a\t%T\t%v\t%v\t %v\n", d, len(d), cap(d), d)
	e = e[1:3] // Changing the length by reslicing the

	f := [12]int{9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}
	g := f[1:5]
	h := make([]int, len(b))
	copy(h, g)
}
