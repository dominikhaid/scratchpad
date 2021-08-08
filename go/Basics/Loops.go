package main

import (
	"fmt"
)

func main() {
	loop()
	ranged()
}

func loop() {
	for i := 0; i <= 100; i += 10 {
		fmt.Println(i)
	}

}

func ranged() {
	fruits := [...]string{"apple", "orange", "banana"}
	fmt.Printf("Index\tElement\n")

	for i, j := range fruits {
		fmt.Printf("%v\t%v\n", i, j)
	}
}
