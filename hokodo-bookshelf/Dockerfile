FROM node:12-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY ./public ./public
COPY ./src ./src
RUN ["npm", "run", "build"]


FROM nginx:1.18-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

