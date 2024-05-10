# Common build stage
FROM node:16-alpine3.14 as common-build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8081

CMD ["node", "dist/src/server.js"]
