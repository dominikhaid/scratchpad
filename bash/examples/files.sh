#!/bin/bash

SOURCE="./loops.sh"
SERVER='user@0.0.0.0:/abspath/to/docker-compose/folder'

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

# COPY TO REMOTE
scp -r -i /home/dominikhaid/.ssh/root $SOURCE $SERVER

# UNZIP FORM A GIVEN FOLDER
tar -C $INFOLDER --strip-components=$depth -xvf $SOURCEFILE $TRAGET
