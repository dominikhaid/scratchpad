package main

import (
	"fmt"
)

func main() {
	scanFn()
	scanLn()
	scan()
}

func scanFn() {
	var i, j int

	fmt.Print("Type two numbers: ")
	fmt.Scanf("%v\n%v", &i, &j)
	fmt.Println("Your numbers are:", i, "and", j)
}
func scanLn() {
	var i, j int

	fmt.Print("Type two numbers in one line: ")
	fmt.Scanln(&i, &j)
	fmt.Println("Your numbers are:", i, "and", j)
}

func scan() {
	var i, j int

	fmt.Print("Type two numbers: ")
	fmt.Scan(&i, &j)
	fmt.Println("Your numbers are:", i, "and", j)
}
