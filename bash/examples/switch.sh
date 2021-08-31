#!/bin/bash

cases=("b" "b")

case $cases in
["a"]*) echo "a" ;;
["b"]*) echo "b" ;;
*) echo "default" ;;
esac
