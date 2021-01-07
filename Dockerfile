FROM nginx:1.17.7-alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist/ninja-directory /usr/share/nginx/html

EXPOSE 80

#edit nginx- conf.d - default.conf -> add try url in - server- location / {  ---- try_files $uri $uri/ /index.html;