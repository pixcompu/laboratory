# choose base container
FROM httpd:2.4

# set the directory as base for the next commands
WORKDIR /var/www/html/vue

# copy host folder to container folder
COPY . /usr/local/apache2/htdocs/

# make container port available to host so we then mount it from the outside later c:
EXPOSE 80