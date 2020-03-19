#!/bin/bash
mongo="/usr/bin/mongod"
if [ -f "$mongo" ]
then
    echo "Mongo já instalado!"
else
    sudo apt-get install gnupg |
    wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
    echo "deb [ arch=amd64,arm64,s390x ] http://repo.mongodb.com/apt/ubuntu bionic/mongodb-enterprise/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
    sudo apt-get update |
    sudo apt-get install -y mongodb-enterprise |
fi

echo "Setup concluído, para iniciar o servidor:"
echo "nodemon server.js	"