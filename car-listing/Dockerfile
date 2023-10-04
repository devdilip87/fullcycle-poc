# pull the official base image
FROM node:current-alpine
# set working direction
WORKDIR /car-list
# install application dependencies
COPY package*.json ./

RUN npm install
# add app
COPY . .

#RUN npm run build

EXPOSE 5000
# start app
CMD ["npm", "run", "dev"]