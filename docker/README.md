# Requirements

- **+18.09** docker
- **+1.23** docker-compose

# Installation

## Set up
- download the project
- execute main project with docker dependencies
```bash
docker-compose up
```
- download the php dependencies
```bash
docker exec dockerlab composer install
```
- copy phinx.example.yml and rename it to phinx.yml

## Run migrations
```bash
docker exec dockerlab php ./vendor/bin/phinx migrate
```

# Execute application
Once docker compose is up you can have access to the following applications

## Main application (localhost:4000/docker)
In this we load the contents of table executions.
![Captura](https://user-images.githubusercontent.com/11744752/62830470-4fa2ac80-bbd5-11e9-8c1f-90fa215e1537.PNG)

After you upload a excel file the output will be the contents of the file uploaded, just to test custom extensions in server.
![Captura1](https://user-images.githubusercontent.com/11744752/62830471-4fa2ac80-bbd5-11e9-9034-22e01d0c5106.PNG)

## Database explorer (localhost:8080)
In this we have adminer database explorer (Note: to access the database of the project you have to set db as host, because is the name of the service)
![Captura2](https://user-images.githubusercontent.com/11744752/62830472-4fa2ac80-bbd5-11e9-918e-884996a85c8c.PNG)

# Author
Felix Diaz (pixcompu)


Have fun!



