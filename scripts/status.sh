#!/bin/bash
#
# author: khanhtc
#
# script check system status
#

echo "--------- Process Status ---------"

ps aux | grep -E "[n]odemon|[p]ython|[a]ria2"

echo "------- Hard Disk Capacity -------"

df -h | grep none

echo "----------------------------------------"

echo "Time:"

hour=$(date +%H)
StartDate=$(date -u -d "$(date +%H:%M:%S)" +"%s")
FinalDate_1=$(date -u -d "05:22:15" +"%s")
FinalDate_2=$(date -u -d "17:22:15" +"%s")
if [ "$hour" -gt 17 ]
    then echo "Time to the next running turn of crawling process is $(date -u -d "0 $FinalDate_1 sec - $StartDate sec" +"%H:%M:%S")"
elif [ "$hour" -lt 5 ]
    then echo "Time to the next running turn of crawling process is $(date -u -d "0 $FinalDate_1 sec - $StartDate sec" +"%H:%M:%S")"
else
    echo "Time to the next running turn of crawling process is $(date -u -d "0 $FinalDate_2 sec - $StartDate sec" +"%H:%M:%S")"
fi
