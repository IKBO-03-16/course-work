FROM node:12.13.0-alpine as build
WORKDIR /work
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.17.5-alpine
COPY --from=build /work/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
