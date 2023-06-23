# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /server
COPY . /server
RUN npm install && npm install typescript -g
RUN tsc
CMD ["node", "./dist/index.js"]
EXPOSE 3000
