#!/bin/bash -ue

pkgcmd=$1

# Create working directory
mkdir /work/out
cd /work/app
cp index.js package.json package-lock.json /work/out
set +e
if [ -f claudia.json ];then
  cp claudia.json /work/out
fi
set -e
cp -r lib docker /work/out/

# Install the packages
cd /work/out
npm install --production

# Run the command
npm run docker:$pkgcmd

# Save claudia.json
if [ "$pkgcmd" == "create-lambda" ];then
  cp claudia.json /work/app/claudia.json
fi

