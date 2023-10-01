#!/bin/bash
if [[ $1 = "redeploy" ]]; then
    docker tag client-prod-i:latest client-prod-old-i:latest
    docker-compose -f docker-compose.prod.yaml down
    docker image rm client-prod-i
    docker-compose -f docker-compose.prod.yaml up
else 
    if [[ $1 = "rollback" ]]; then 
        docker tag client-prod-old-i:latest client-prod-i:latest
        docker image rm client-prod-old-i
        docker-compose -f docker-compose.prod.yaml up
    else
        echo "Command should look like this: ./bin/prod_deploy.sh redeploy OR LIKE THIS ./bin/prod_deploy.sh rollback"
    fi
fi