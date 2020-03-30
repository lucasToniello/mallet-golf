#!/bin/bash
docker="/usr/bin/docker"

if [ -f "$docker" ]
then
    echo "Docker já instalado...Prosseguindo"
else
	echo "Instalando docker..."
	apt-get update
	apt-get install docker-ce docker-ce-cli containerd.io
fi

echo "Iniciando servidor:"
docker-compose down
docker-compose up -d