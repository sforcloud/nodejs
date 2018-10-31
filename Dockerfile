FROM node:latest
RUN npm install pm2 -g
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "pm2-runtime", "ecosystem.config.js"]