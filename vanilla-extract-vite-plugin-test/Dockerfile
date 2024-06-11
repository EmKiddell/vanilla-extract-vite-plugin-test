FROM node:18.18.2 AS source
WORKDIR /app
COPY vanilla-extract-vite-plugin-test/package*.json .
RUN npm install
COPY vanilla-extract-vite-plugin-test .
RUN npm run build
FROM source AS test
ENTRYPOINT ["npm", "run", "test"]
