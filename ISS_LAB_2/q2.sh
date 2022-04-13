#!/bin/bash
chmod ugo+r hamlet.txt
grep -oh -i "to" hamlet.txt
grep -wh "is" hamlet.txt
grep -A 2 -wh "bear" hamlet.txt
chmod go-wx hamlet.txt
chmod ugo+r hamlet.txt
groups
for file in *; do
    if [ -f $file ]; then
        if [ -x $file ]; then
            echo $file
        fi
    fi
done

