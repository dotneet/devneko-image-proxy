#!/bin/bash -ue

claudia pack
mkdir -p /work/app/out
cp /work/out/*.zip /work/app/out/

