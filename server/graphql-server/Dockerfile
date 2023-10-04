# pull the official base image
FROM node:current-alpine
# set working direction
WORKDIR /graphql-server
# install application dependencies
COPY package*.json ./

RUN npm install
# add to graphql-server
COPY . .

#RUN npm run build

EXPOSE 4000
# graphql server start
CMD ["npm", "run", "start-graphql"]