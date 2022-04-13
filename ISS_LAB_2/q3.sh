#!/bin/bash
cal >>o1.txt
date >>o1.txt
i=0
for ((i = 0; i < 100; i++)); do
    echo "IIIT Hyderabad is cool" >>o1.txt
done 
head -3 o1.txt
head -15 o1.txt | tail -10
cat o1.txt | grep -i "IIIT Hyderabad is cool" | wc -l
echo "ISS Zindabad" >> o2.txt
wc -w < o2.txt
echo "I am Kassi" >> o2.txt
wc -l < o2.txt
awk '{ print $4 }' o1.txt
awk '{ print $2 " " $3 " " $4 " " $5 }' o1.txt
var8=` awk '{ print $3 }' o1.txt | wc -l `
((req=var8-5))
awk '{ print $3 }' o1.txt | head -$req
awk '{ print $2 " " $4 }' o1.txt 