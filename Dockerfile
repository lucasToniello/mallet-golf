FROM node:12.14.1

WORKDIR /home/node/mallet-golf

COPY package*.json ./

RUN npm install

COPY app/ ./

EXPOSE 8080

CMD ["node", "server.js"]
