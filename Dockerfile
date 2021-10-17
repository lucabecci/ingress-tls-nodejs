FROM node:16

WORKDIR ./

COPY package*.json ./

COPY . .

RUN npm install 

EXPOSE 8080

CMD node main.js
