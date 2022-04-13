#!/bin/bash

var1=$1
var2=$2
var3=$3

echo 
if  test  "$1" = "" 
    then 
        echo "No first value supplied"
        exit
fi

if  test  "$2" = ""
    then
        echo "No second value supplied"
        exit
fi
if  test  "$3" = ""
    then
        echo "No third value supplied"
        exit
fi

z=$(echo $var1*$var2*$var3 | bc)
echo "$z"