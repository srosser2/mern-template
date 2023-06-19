# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /mern-docker-template/server
COPY . /server/
RUN yarn install --production
# CMD ["node", "app/src/index.js"]
EXPOSE 3000
