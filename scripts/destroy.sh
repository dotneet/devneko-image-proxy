#!/bin/bash -ue

wd=$(cd $(dirname $0) && pwd)
cd $wd

. functions.sh

run-package-command destroy-lambda

if [ -f ../claudia.json ];then
  rm ../claudia.json
fi
