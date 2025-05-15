FROM node:24-alpine

LABEL com.docker.container-name="hms-app01"
WORKDIR /app

COPY package*.json ./
COPY . .
RUN rm -rf node_modules/
RUN npm cache verify
RUN npm i

COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]