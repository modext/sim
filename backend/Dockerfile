FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# COPY wait-for-it.sh wait-for-it.sh

# RUN chmod +x wait-for-it.sh

COPY . .

EXPOSE 5000

CMD ["npm", "start"]