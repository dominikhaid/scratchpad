#! /bin/bash

is_array() { #detect if arg is an array, returns 0 on sucess, 1 otherwise
	[ -z "$1" ] && echo 1 && return 1
	if [ -n "$BASH" ]; then
		declare -p ${1} 2>/dev/null | grep 'declare \-a' >/dev/null && echo 0 && return 0
	fi
	echo 1 && return 1
}
