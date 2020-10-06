FROM node:12 as build-deps
WORKDIR /client
COPY package*.json ./
RUN npm install --verbose
COPY . ./
RUN npm run build --verbose

FROM nginx:latest
COPY --from=build-deps ./build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]