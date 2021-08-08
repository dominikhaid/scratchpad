package main

import (
	"fmt"
)

func familyName(fname string, age int) {
	var string output = "something"
	fmt.Println("Hello", age, "year old", fname, "Refsnes")
	return output
}

func main() {
	familyName("Liam", 3)
	familyName("Jenny", 14)
	familyName("Anja", 30)
}
