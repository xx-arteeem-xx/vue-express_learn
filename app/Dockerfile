FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
CMD [ "npm", "run", "dev", "--", "--port", "8000", "--host", "0.0.0.0" ]