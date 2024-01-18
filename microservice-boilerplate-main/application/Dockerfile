FROM node:14-alpine3.13

ARG SRV_DIR=/usr/src/app
WORKDIR $SRV_DIR

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . $WORKDIR

EXPOSE 3000