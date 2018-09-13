#!/usr/bin/env bash

./epoch.js

EPOCH_TIME=1536858193
STRING_FROM_EPOCH=$(./epoch.js $EPOCH_TIME)

if [[ $STRING_FROM_EPOCH =~ [0-9]+-[0-9]+-[0-9]+\ [0-9]+:[0-9]+:[0-9]+ ]]; then
  echo "Date string returned correctly"
else 
  exit 1
fi

EPOCH_FROM_STRING=`./epoch.js "$STRING_FROM_EPOCH"`

if [ $EPOCH_FROM_STRING = "$EPOCH_TIME" ]; then
  echo "Date converted back to epoch correctly"
else
  echo 1
fi
