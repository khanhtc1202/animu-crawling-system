#!/bin/bash
#
# author: khanhtc
#
# script check system status
#

ps aux | grep -E "nodemon|python|aria2"

df -h | grep none
