#!/bin/bash
if [[$1 = "up" || $1 = "down"]]; then
    docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml $1
else
    echo "Command should look like this: ./prod_deploy.sh up|down"
fi