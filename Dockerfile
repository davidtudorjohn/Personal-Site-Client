FROM node:alpine as build-deps
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm build

FROM nginx:latest
COPY --from=build-deps /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]