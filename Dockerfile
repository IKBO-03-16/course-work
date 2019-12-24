FROM nginx:alpine
COPY index.css /var/lib/www/index.css
COPY index.html /var/lib/www/index.html
COPY pages /var/lib/www/
COPY nginx.conf /etc/nginx/nginx.conf
RUN ls -al /var/lib/www
