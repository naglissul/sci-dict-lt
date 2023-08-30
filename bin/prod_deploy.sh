#!/bin/bash
if [[$1 = "up" || $1 = "down"]]; then
    cd ..
    docker-compose -f docker-compose.prod.yaml $1
else
    echo "Command should look like this: sh ./prod_deploy.sh up|down"
fi