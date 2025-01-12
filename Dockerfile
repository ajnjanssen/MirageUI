FROM node:18

WORKDIR /node-server
COPY package*.json ./
RUN yarn install
COPY . .

WORKDIR /node-server/client
RUN yarn install
RUN yarn build

WORKDIR /node-server
EXPOSE 4000
CMD ["node", "src/server.js"]