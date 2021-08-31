#! /bin/bash
#shopt -s nullglob dotglob

runtime_args=($(echo $@ | tr " " "\n"))

# NOTE MAIN RUNTIME
runtime() {

	local __help=$"
Usage: $(basename $0) [OPTIONS]

Options:
  -a                           Option b
  -b                           Option a
"

	local __init=$"



Starting batch
____________________________________________________________________
Message: $option_a

"

	local __summery=$"
___________________________________________________________________


Message: $1  Option A: $option_a Option B: $option_b 

_____________________________________________________________________

"

	info() {
		echo "$__help"
		exit
	}

	get_arguments() {
		for arg in "${runtime_args[@]}"; do

			if [ $arg = '--help' ]; then
				info
			fi

			if [ $arg = '-h' ]; then
				info
			fi

			if [ $arg = '-a' ]; then
				echo "option a"
			fi

			if [ $arg = '-b' ]; then
				echo "option b"
			fi

		done

	}

	get_arguments
	echo "$__init"
	$1
	echo "$__summery"
}

tmp() {
	echo "fiiii"
}

runtime tmp
