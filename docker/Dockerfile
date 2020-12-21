FROM amazonlinux
LABEL maintainer="devneko <dotneet@gmail.com>"
RUN yum install -y gcc-c++ which zip && \
    curl --silent --location https://rpm.nodesource.com/setup_12.x | bash - && \
    yum install -y nodejs && \
    npm i -g yarn \
    yarn global add claudia
RUN yarn global add sharp
RUN mkdir /work
WORKDIR /work
