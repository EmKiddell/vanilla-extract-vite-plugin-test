#! /usr/bin/env bash
set -eo pipefail

imageName="v-e-plugin-test:latest"
dockerfilePath="../../Dockerfile"

docker build -t ${imageName} --target test -f ${dockerfilePath} .

docker run ${imageName}
