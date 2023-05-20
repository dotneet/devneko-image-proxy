#!/bin/bash -ue

function check-builder-image {
  image=$(docker images -q devneko-ip-builder)
  set -e
  if [ "$image" == "" ];then
    pushd .
    ../docker/build.sh
    popd
  fi
  set +e
}

function run-package-command {
  check-builder-image

  wd=$(pwd)
  [ -f ../.env ] && source ../.env
  docker run \
    -v $wd/..:/work/app \
    -v $HOME/.aws:/root/.aws \
    -ti \
    --entrypoint /bin/bash \
    -e AWS_REGION=$AWS_REGION \
    -e AWS_PROFILE=$AWS_PROFILE \
    -e LAMBDA_NAME=$LAMBDA_NAME \
    -e LAMBDA_ROLE=$LAMBDA_ROLE \
    -e LAMBDA_MEMORY=$LAMBDA_MEMORY \
    -e LAMBDA_TIMEOUT=$LAMBDA_TIMEOUT \
    -e S3_BUCKET=$S3_BUCKET \
    -e PATH_PREFIX=$PATH_PREFIX \
    devneko-ip-builder \
    /work/app/docker/run-package-command.sh $1
}

