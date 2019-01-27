#!/bin/bash -ue

pkgcmd=$1

# Create working directory
mkdir /work/out
cd /work/app
cp index.js package.json yarn.lock /work/out
set +e
if [ -f claudia.json ];then
  cp claudia.json /work/out
fi
set -e
cp -r lib docker /work/out/

# Install the packages
cd /work/out
yarn install --production

# Run the command
yarn run docker:$pkgcmd

# Save claudia.json
if [ "$pkgcmd" == "create-lamba" ];then
  cp claudia.json /work/app/claudia.json
fi

