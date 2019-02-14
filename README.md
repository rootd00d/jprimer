# jprimer
Node.js-based Client-Server Prime Number Verification

## Goal
A simple client-server prime number tester with TDD in mind

## Requirements
* Quickly verify prime and non-prime numbers for primality
* Fully tested client and server-side APIs for correctness
* Handle concurrent client requests in parallel

## Usage
```
docker-compose -f docker-compose.server.yml up

START=12345678901234567890123456789012345678901234567890 node client.js --COUNT=100000
```

> Note: Command-line switch values can only be so large -> use environment variables if they get too big.

## Code Coverage
```
cd client && jest # -> produces a "coverage" folder
```


## Dependencies
* nvm 0.34.0
* Node.js 10.15.1
* Jest 24.1.0
* docker-ce 18.09+
* docker-compose 1.22+

# References
[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)


[Testing a Node.JS Application Within a Docker Container](https://dzone.com/articles/testing-nodejs-application-using-mocha-and-docker)


[Express Routes: A TDD Approach](https://medium.com/@jodylecompte/express-routes-a-tdd-approach-1e12a0799352)


[Node.js Cluster and Express](https://rowanmanning.com/posts/node-cluster-and-express/)

