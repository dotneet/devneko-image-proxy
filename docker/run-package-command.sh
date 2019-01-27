#!/bin/bash -ue

pkgcmd=$1

mkdir /work/out
cd /work/app
cp index.js package.json yarn.lock /work/out
set +e
if [ -f claudia.json ];then
  cp claudia.json /work/out
fi
set -e
cp -r lib docker /work/out/
cd /work/out
yarn install --production
yarn run docker:$pkgcmd
cp claudia.json /work/app/claudia.json
