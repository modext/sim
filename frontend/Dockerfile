# Use an official Node.js image as a base image
FROM node:16

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install || yarn install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]
