# choose base container
FROM node:10

# set the directory as base for the next commands
WORKDIR /usr/src/tracker

# copy host folder to container folder
COPY . /usr/src/tracker

# install vue goddies and tools for cli
RUN npm install -g @vue/cli

# install server to test dist folder
RUN npm install -g serve

# install project libraries
RUN npm install

# expose dev url
EXPOSE 8080

# expose vue ui project url
EXPOSE 8000

# run vue ui to have access to development tools from the browser!
CMD vue ui --host 0.0.0.0 --port 8000