Generic tracker for various topic/activities to test VueJS

# Requirements

- **+18.09** docker
- **+1.23** docker-compose

# Installation

## Set up
- download the project
- execute main project with docker dependencies
```bash
docker-compose up -d
```

### Compiles and hot-reloads for development
```
docker exec trackercli npm run serve
```

### Compiles and minifies for production
```
docker exec trackercli npm run build
```

### Lints and fixes files
```
docker exec trackercli npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Execute application
When the project is up, it launches vue ui which is a web application to manage your vue project and interact with them
- import your current project
- go to 'tasks'
- select 'serve'
- select 'start task'
- wait until 'open application' is enabled
- select 'open application'
- enjoy!
![image](https://user-images.githubusercontent.com/11744752/70411466-f11cfc00-1a17-11ea-880a-047150ccc8cf.png)

## Main application (localhost:8000)
In this we implement a multi-purpose generic tracker with components using Vue.js.
![image](https://user-images.githubusercontent.com/11744752/70384092-fe19ec80-193e-11ea-9ab0-bb06ec2971a6.png)

# Author
Felix Diaz (pixcompu)


Have fun!
