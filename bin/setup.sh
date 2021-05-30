#!/usr/bin/env bash
# Add script to:
# * Install dependencies
# * Build/Compile
# * Run Test Suit to validate
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
cd $DIR/../parking_lot && npm install && npm test
#
# After this is run, bin/parking_lot
# should Just Work.