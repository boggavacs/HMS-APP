#!/bin/bash
GHCR_TOKEN=$(pass show gh/token)
GHCR_USER="boggava"
echo $GHCR_TOKEN | docker login ghcr.io -u $GHCR_USER --password-stdin
docker compose up -d