# choose base container
FROM php:7.2-apache

# install libraries to support gd extension
RUN apt-get update && apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev

# install linux zip util so composer uses when unziping dependencies
RUN apt-get install -y zip
RUN apt-get install -y unzip

# install PDO libraries
RUN apt-get install -y libpq-dev

# enable extensions for read excel files
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install -j$(nproc) gd
RUN docker-php-ext-install -j$(nproc) zip

# enable extensions for database connection
RUN docker-php-ext-install pdo pdo_pgsql pgsql

# set the directory as base for the next commands
WORKDIR /var/www/html/docker

# copy host folder to container folder
COPY . /var/www/html/docker

# copy composer so we can run the dependencies installation from our environment
COPY --from=composer /usr/bin/composer /usr/bin/composer

# disable warning about superuser stuff
RUN export COMPOSER_ALLOW_SUPERUSER=1

# make container port available to host so we then mount it from the outside later c:
EXPOSE 80