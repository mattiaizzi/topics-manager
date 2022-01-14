FROM node:16-alpine

WORKDIR /topics-manager

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD npm start