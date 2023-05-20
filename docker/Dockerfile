# AWS Official Lambda Image
# https://hub.docker.com/r/amazon/aws-lambda-nodejs
FROM public.ecr.aws/lambda/nodejs:12

LABEL maintainer="devneko <dotneet@gmail.com>"
RUN yum install -y gcc-c++ which zip
# RUN curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
RUN npm install -g --unsafe-perm=true --allow-root claudia sharp@0.30.7
RUN mkdir /work
WORKDIR /work
