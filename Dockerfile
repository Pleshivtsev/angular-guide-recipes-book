### STAGE 1: Buld ###
FROM node:14.3-alpine AS build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/angular-gude-recipe-book /usr/share/nginx/html