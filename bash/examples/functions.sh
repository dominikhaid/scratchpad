#!/bin/bash

simpleFunction() {
	local TXT="SIMPLE FUNCTIOn"
	echo $TXT
}

simpleFunction

argFunction() {
	echo $1
}

argFunction "ARGEMENT PASSED"

returnArg() {
	RES=("RETURNED" "ARGUMENTS")
	echo "${RES[@]}"
}

res=$(returnArg)

printf "${res[@]}"
