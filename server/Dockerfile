FROM node:10.15.1-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 3000
EXPOSE 9229
CMD ["npm", "start"]
