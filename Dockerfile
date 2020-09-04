# Stage 0, "build-stage"
FROM node:12.18.3 as build-stage

WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

FROM nginx:alpine
WORKDIR /var/www/html
COPY --from=build-stage /app/dist/ .
COPY deploy/default /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

