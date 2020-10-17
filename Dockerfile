FROM node:12.7-alpine AS build
# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install && mkdir /ui-front && mv ./node_modules ./ui-front
WORKDIR /ui-front
COPY . .
RUN npm run build

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------

FROM nginx:alpine
LABEL author="siraj"
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]