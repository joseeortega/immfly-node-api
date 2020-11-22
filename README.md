
# Explanation

## Exceptions
Custom exceptions has been added in order to control de inputs of the API.

Also added those exceptions to the test suite.

In addition I have added a configuration variable as "feature flag" to throw or not when the order is invalid on the ```countries``` endpoint

## Routing

Routes has been separated by endpoints with its services in order to mantain the project clean and well organizated.

## Docker

Dockerfile, dockerignore and docker-compose has been added.

## ENV Variables

Env variables habe been splited into dev and pro files.
On the npm run XXXXX we copy to the .env output file the needed variables.

## Run

In order to run from command line just type :

```npm run dev```

Also for docker compose, just ```docker-compose up``` and the API will be available on port 5005 .

# Immfly Questions:

* SQL (SQL databases you have experience with)
    SQL Server, Oracle SQL Server, DB2, 
* NOSQL (NOSQL databases you have experience with)
    MongoDB, MariaDB
* RabbitMQ (Have you used it before? And how long?)
    I have never used it
* Git (Do you have experience with git?)
    Yes, I have a solid development experience with Git.
    Also, I have worked with different Git WorkFlow.
    * Git Flow
    * GitHub Flow: Trunk-Based Development
    * Trunk-Based Development