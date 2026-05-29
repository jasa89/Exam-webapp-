### Technical decisions 

We choose to use React for front end development.

- Choose to use PostgreSQL and node.js for backend development.

express → backend API
pg → PostgreSQL driver
cors → frontend/backend communication
dotenv → env variables
nodemon → dev server

- Choose to use mocha and chai for backend testing becouse it was not recommended to use jest with vite project bacouse it does npt have support for vite. Mocha and chai are commonly used with vite projects for testing.
 
Chose to use docker for running the application locally.

- installed docker and created . dockerignore file to prevent docer from copying big local dependencies into container.

- tested docker file and created container to docker desktop and ran the application inside docker container.

- found out that docker is suitable for running the project in local container environment.