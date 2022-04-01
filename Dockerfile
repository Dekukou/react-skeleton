FROM bitnami/node:14.17.6-debian-10-r1 as build-deps

COPY . /app/
WORKDIR /app

RUN yarn install --network-timeout 1000000
RUN yarn build

FROM nginx:1.12-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]