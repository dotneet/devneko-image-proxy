#!/bin/bash -ue

function run-package-command {
  wd=$(pwd)
  [ -f ../.env ] && source ../.env
  docker run \
    -v $wd/..:/work/app \
    -v $HOME/.aws:/root/.aws \
    -ti \
    -e AWS_REGION=$AWS_REGION \
    -e LAMBDA_ROLE=$LAMBDA_ROLE \
    -e S3_BUCKET=$S3_BUCKET \
    -e PATH_PREFIX=$PATH_PREFIX \
    devneko-ip-builder \
    /work/app/docker/run-package-command.sh $1
}

