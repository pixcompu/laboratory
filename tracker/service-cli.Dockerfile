# choose base container
FROM node:10

# set the directory as base for the next commands
WORKDIR /usr/src/tracker

# copy host folder to container folder
COPY . /usr/src/tracker

# install vue goddies and tools for cli
RUN npm install -g @vue/cli

# expose dev url
EXPOSE 8080

# expose vue dev url
EXPOSE 8000

# keep container alive
RUN vue ui