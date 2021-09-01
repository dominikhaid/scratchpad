#! /bin/bash

echo "THIS HERE SHOULD BE REPLACED" | sed "s/HERE/\//g"
echo "HERE_9044REMOVE.jpg" | sed "s/.[a-z|A-Z|0-9|\-]*\.\w*$//g"
echo "REPLACE HERE" | sd 'HERE' ''
sed -En "s|$PWD/(.*)\.sh$|\1|p"

echo "convert this to upper" | tr "[a-z]" "[A-Z]"

__init=$"



Starting batch converting images
____________________________________________________________________
in: $folder recursively
types: $type

"

# TRAP IGNORE SIGN / CONDITION
TR="HALLO
_
WELT
AGAIN"
echo $TR | tr "_" "\n"

# DISABLE OUTPUT
stty -echo
# ENABLE OUTPUT
stty echo

# GET INPUT FROM USER
printf "User Name: "
read USER_NAME

# FIND TEXT FROM THE FIRST COLUMN WITH REGEX
cat /etc/passwd | awk -F: '{ print $1 }' | awk -e 'match($0, /'$USER_NAME'/) {print substr( $1, RSTART, RLENGTH )}'

# PAUSE SCRIPT
sleep 5

# SPAWN KEY
xdotool key c

ls $HOME &
pid=$!
# If this pid is killed,, kill the while
trap "kill $pid 2> /dev/null" EXIT

# execute the function
while kill -0 $pid 2>/dev/null; do
	echo "PROCESS LS"
done

# Disable the trap on a normal exit.
trap - EXIT

# SORUCE ANOTHER SCRIPT
#source $SCRIPTPATH

# SET TERMINAL COLOR
tput setaf 1
# RESET TERMINAL COLOR
tput sgr0
