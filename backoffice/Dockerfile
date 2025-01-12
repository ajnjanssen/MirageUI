FROM node:18

WORKDIR /backoffice
COPY package*.json ./
RUN yarn install
COPY . .

WORKDIR /backoffice/client
RUN yarn install
RUN yarn build

WORKDIR /backoffice
EXPOSE 3001
CMD ["yarn", "dev"]