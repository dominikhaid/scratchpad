FROM node:13
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
#COPY deamon.json /etc/docker/daemon.json

RUN yarn install 
#RUN npm i
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
EXPOSE 80

CMD [ "node", "./server.js" ]
#docker build -t next-dominikhaid .
#docker run --name dev-server -p 80:80 dev-server/node
