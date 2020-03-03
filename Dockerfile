FROM node:12.14.1

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
