FROM node:16-alphine

LABEL maintainer = 'yerinlee0804@gmail.com'  누구인지 명시

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000
CMD [ "npm", "app.js" ]

