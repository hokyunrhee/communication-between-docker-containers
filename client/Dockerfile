FROM node:16-alpine as builder
ARG NEXT_PUBLIC_BACKEND_URL
WORKDIR /client
COPY . .
RUN yarn install && yarn run build

FROM nginx:alpine
COPY nginx /etc/nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /client/out /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]