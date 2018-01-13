#!/bin/bash
#
# author: khanhtc
#
# script for download .torrent file and download resource serve by this torrent
#

url=$1

# change workdir
cd ../media/

# download .torrent file
filename=$(basename "$url")
wget "$url"

# download media resource
aria2c $filename --seed-time=0

# remove .torrent file
rm -rf $filename