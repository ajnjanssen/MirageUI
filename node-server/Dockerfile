FROM node:18

WORKDIR /node-server
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000
CMD ["node", "src/server.js"]