#!/bin/bash -ue

wd=$(cd $(dirname $0) && pwd)
cd $wd

docker build -t devneko-ip-builder .

