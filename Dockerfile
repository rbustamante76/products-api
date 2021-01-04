FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install

COPY src /usr/app/src

EXPOSE $PORT

CMD npm start