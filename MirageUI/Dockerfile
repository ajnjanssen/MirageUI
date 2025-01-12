# Stage 1: Build the MirageUI project
FROM node:18 AS build-ui

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Stage 2: Set up the runtime environment
FROM node:18

WORKDIR /app
COPY --from=build-ui /app /app

EXPOSE 3000

CMD ["yarn", "dev"]