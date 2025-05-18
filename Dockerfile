FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package*.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 3003
RUN chown -R node /app
USER node
CMD ["npm", "start"]
