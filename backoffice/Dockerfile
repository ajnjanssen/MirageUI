FROM node:18

WORKDIR /backoffice
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3001
CMD ["yarn", "dev"]