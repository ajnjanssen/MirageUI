FROM node:18

WORKDIR /node-server
COPY package*.json ./
RUN yarn install
COPY . .

EXPOSE 4000
CMD ["node", "src/server.js"]