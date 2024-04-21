FROM node:14.18-alpine AS BUILD_IMAGE
RUN apk add --no-cache nodejs npm
WORKDIR /product_service
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /product_service /app/
EXPOSE 8082
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
