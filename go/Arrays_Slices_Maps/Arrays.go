package main

import (
	"fmt"
)

func main() {
	definedArr()
	inferredArr()
}

func definedArr() {
	var a = [3]int{1, 2, 3}
	b := [5]int{4, 5, 6, 7, 8}
	c := [4]int{1: 10, 2: 40}
	d := [3]int{}        //not initialized
	e := [3]int{1, 2}    //partially initialized
	f := [3]int{1, 2, 3} //fully initialized
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c, d, e, f)
}

func inferredArr() {
	var a = [...]int{1, 2, 3}
	b := [...]int{4, 5, 6, 7, 8}

	fmt.Println(a)
	fmt.Println(b)

	fmt.Println(len(a))
	fmt.Println(len(b))
}
