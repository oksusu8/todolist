FROM node:16-alphine


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

