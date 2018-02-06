#!/bin/bash
#
# author: khanhtc
#
# script check system status
#

ps aux | grep -E "[n]odemon|[p]ython|[a]ria2"

df -h | grep none
