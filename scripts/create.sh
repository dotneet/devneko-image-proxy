#!/bin/bash -ue

wd=$(cd $(dirname $0) && pwd)
cd $wd

. functions.sh

run-package-command create-lambda
