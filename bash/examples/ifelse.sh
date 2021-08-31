#!/bin/bash

# NOTE TEST FILES
if test -f "$FILE"; then
	echo "is file"
fi

# TEST IF COMMAND IS AVAILABLE
if ! command -v ls &>/dev/null; then
	echo "command does not exist"
fi

# TEST IF FOLDLER EXISTS
if [ -d "./" ]; then
	echo "folder exists"
fi

# TEST IF FILE EXISTS
if ! [ -f "./doesnotexist.md" ]; then
	echo "file does not exist"
fi

# EVAL PIPE IN TEST
if [[ $(echo $i | sd '.*_\d\d?\d?\d_\d\d?\d.*'$ext '') == '' ]]; then
	continue
fi

# CHAIN CONDITIONS
if [[ "$ext" == ".jpg" && ! "$i" =~ ".jpg" && ! "$i" =~ ".jpeg" ]]; then
	continue
fi

# IF STRING INCLUDES
if [[ "$i" =~ ".jpeg" ]]; then
	continue
fi
