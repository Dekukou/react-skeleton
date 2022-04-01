#!/bin/bash

. .docker.env

if [[ -z `docker network ls | grep $DOCKER_NETWORK` ]]; then
    echo "Creating network $DOCKER_NETWORK ..."
    docker network create $DOCKER_NETWORK && echo "Network $DOCKER_NETWORK created."
fi

echo "Stopping old containers ..."
docker stop DOCKER_CONTAINER_NAME 2>/dev/null
docker stop ssl-proxy-DOCKER_CONTAINER_NAME 2>/dev/null

# Run the node server on port 3000
echo "Starting node server ..."
docker run -it \
    --rm \
    --workdir="/app" \
    -v "$PWD/..:/app" \
    -p "$LISTEN_PORT:$LISTEN_PORT" \
    --network=$DOCKER_NETWORK \
    --network-alias=$DOCKER_NETWORK_ALIAS \
    --name=$DOCKER_CONTAINER_NAME \
    -d \
    $NODE_IMAGE \
    yarn start

echo "Starting ssl proxy ..."
docker run \
    --rm \
    --name="ssl-proxy-$DOCKER_CONTAINER_NAME" \
    -e "DOMAIN=$DOCKER_NETWORK_ALIAS" \
    -e "TARGET_PORT=$LISTEN_PORT" \
    -e "TARGET_HOST=$DOCKER_NETWORK_ALIAS" \
    -e "SSL_PORT=$SSL_LISTEN_PORT" \
    --network=$DOCKER_NETWORK \
    -p "$SSL_LISTEN_PORT:$SSL_LISTEN_PORT" \
    -d \
    $SSL_PROXY_IMAGE

if [[ $? == 0 ]]; then
    echo "SSL proxy started."
else
    echo "SSL proxy failed to start."
fi