# pull the official base image
FROM node:current-alpine
# set working direction
WORKDIR /api-server
# install application dependencies
COPY package*.json ./

RUN npm install
# add to api-server
COPY . .

#RUN npm run build

EXPOSE 3001
# server start
CMD ["npm", "run", "start-api"]