#!/bin/bash

NODE_IMAGE="bitnami/node:14.17.6-debian-10-r1"

# Install yarn packages
docker run \
    --rm \
    -v "$PWD/..:/app" \
    --workdir="/app" \
    "$NODE_IMAGE" \
    yarn install
    