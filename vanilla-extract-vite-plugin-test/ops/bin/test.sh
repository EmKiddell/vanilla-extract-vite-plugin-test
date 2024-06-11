#! /usr/bin/env bash
set -eo pipefail

imageName="v-e-plugin-test:latest"
dockerfilePath="vanilla-extract-vite-plugin-test/Dockerfile"

docker build -t ${imageName} --target test -f ${dockerfilePath} .

docker run ${imageName}
