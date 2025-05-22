FROM node:lts-alpine
ENV NODE_ENV=production
# ENV NODE_ENV=development
WORKDIR /app
COPY ["package*.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent
# RUN npm install --silent
RUN npm install --include=dev
COPY . .
RUN npm run build
EXPOSE 3003
RUN chown -R node /app
USER node
CMD ["npm", "start"]