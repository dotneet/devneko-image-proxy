#!/bin/bash -ue

wd=$(cd $(dirname $0) && pwd)
cd $wd

[ -f ../.env ] && source ../.env

docker run \
  -v $wd/..:/work/app \
  -v $HOME/.aws:/root/.aws \
  -ti \
  -e AWS_REGION=$AWS_REGION \
  -e LAMBDA_ROLE=$LAMBDA_ROLE \
  -e AWS_S3_BUCKET=$AWS_S3_BUCKET \
  -e PATH_PREFIX=$PATH_PREFIX \
  devneko-ip-builder \
  /work/app/docker/run-package-command.sh update-lambda

