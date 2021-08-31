#! /bin/bash

#normal array
ARRAY=(1 2 3 4)
printf '%s ' "${ARRAY[@]}"

ARRAY2=(5 6 7)
MULTI=(
	${ARRAY[@]} "STRING"
	${ARRAY2[@]} "STRING 2"
)

echo "
"
# From 0 to 2
echo ${MULTI[@]:0:2}
# From 4 to 4
echo ${MULTI[@]:4:1}
# From 8 to 8
echo ${MULTI[@]:8:1}
