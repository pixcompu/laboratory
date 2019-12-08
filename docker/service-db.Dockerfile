# choose base container
FROM postgres:10

# set init script
COPY docker.sql /docker-entrypoint-initdb.d/docker.sql

# make container port available to host so we then mount it from the outside later c:
EXPOSE 5432