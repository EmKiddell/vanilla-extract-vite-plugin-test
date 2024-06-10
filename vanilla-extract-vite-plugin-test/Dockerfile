FROM node:18.18.2 AS source
WORKDIR /app
COPY ./package*.json .
RUN npm install
COPY .eslintrc.cjs .
COPY . .
RUN npm run build
FROM source AS test
ENTRYPOINT ["npm", "run", "test"]
