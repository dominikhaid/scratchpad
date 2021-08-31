#! /bin/bash

FOLDER="./"
FIND_RULE="-iname '*.sh' -o -iname '*.sh'"
FINDEXCLUDE='loops.*'
FINDRESULT=()

# NOTE FIND FILES REGEX
for file in $(eval find $FOLDER $FIND_RULE | sd $FINDEXCLUDE ''); do
	if [[ $(echo $file) == './' || $(echo $file) == '' || "$file" =~ '_ignore' ]]; then
		continue
	fi
	FINDRESULT+=($file)
done

# NOTE READ FOLDER MATCHING REGEX
while IFS= read -d $'\0' -r file; do
	FINDRESULT+=($0)
done < <(find $FOLDER -regex ".*loops.*\.\(sh\)" -print0)

# NORMAL LOOP
for file in "${FINDRESULT[@]}"; do
	echo $file
done

# DO UNTIL COMMAND ENDS
until ls &>/dev/null; do
	echo "File"
done
