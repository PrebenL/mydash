FROM node:15
ENV TZ="Europe/Brussels"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 8080
CMD node app.js
