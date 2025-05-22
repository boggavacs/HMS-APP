#!/bin/bash
IMAGE="ghcr.io/boggavacs/hms-app:1.0"
CONTAINER="hms-app-container"

GHCR_TOKEN=$(pass show gh/token)
GHCR_USER="boggava"
echo $GHCR_TOKEN | docker login ghcr.io -u $GHCR_USER --password-stdin

echo "Pulling latest image from GitHub Packages..."
docker pull $IMAGE

LOCAL_IMAGE_ID=$(docker images --format "{{.Repository}}:{{.Tag}} {{.ID}}" | grep "$IMAGE" | awk '{print $2}' | head -n1)
REMOTE_IMAGE_ID=$(docker inspect --format='{{.Id}}' $IMAGE)

if [ "$LOCAL_IMAGE_ID" != "$REMOTE_IMAGE_ID" ]; then
  echo "New image detected. Updating container..."
  docker stop $CONTAINER || true
  docker rm $CONTAINER || true
  docker rmi $IMAGE || true
  docker pull $IMAGE
  docker compose build
  docker compose up -d
else
  echo "No new image found. Container is up to date."
fi

# GHCR_TOKEN=$(pass show gh/token)
# GHCR_USER="boggava"
# echo $GHCR_TOKEN | docker login ghcr.io -u $GHCR_USER --password-stdin
# docker compose up -d