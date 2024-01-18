<p align="center">
  <a href="http://www.pagaleve.com.br/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## microservices-boilerplare (replace it with the microservice's name)

Simple description about what the microservice is going to be in charge of.

## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run off

```

## Deploy the app to the cloud

```bash
# development
$ npm run deploy

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Frameworks and libraries we are using:

- [NestJS](https://docs.nestjs.com/)
    - NestJS is the main framework that we use to develop our microservices, some of the main reasons include:
        - Nest provides an out-of-the-box application architecture that allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.
        - Large community and support system.
        - Great documentation.
        - Easy unit testing.
        - Built for large-scale enterprise applications.
- [Serverless framework](https://www.serverless.com/framework/docs/)
    - Serverless is the framework that we use to write our infrastructure as code (IaC) for the resources that are strictly related to this microservice, as the name suggests the main purpose of the serverless framework is to create a serverless architecture, so in most cases the resources created would be: lambdas functions, API gateway and DynamoDB tables.
        - What a serverless architecture means: A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS (or any provider you are working with). You no longer have to provision, scale, and maintain servers to run your applications, databases, and storage systems.
        - All our general-purpose infrastructure is being maintained in our [infra-service](https://github.com/pagaleve/infra-service)
- [Jest](https://jestjs.io/docs/getting-started)
    - Jest is the testing framework that we use for both unit and end-to-end testing. The main reasons we decide to use it are:
        - It's easy to setup
        - It is fast when executing test cases
        - Isolated and sandboxed tests: Each Jest test runs in its own sandbox, which ensures no two tests can interfere or impact each other.
        - Powerful Mocking support: Jest tests support all types of mocking – be it functional mocking, timer mocking, or mocking individual API calls.
- [Husky](https://typicode.github.io/husky/#/?id=manual)
    - Husky is a library that helps us to use git hook ensuring that our commits and pushes will be performed in the correct way, where all our tests are passing, the commit messages were written correctly, and the code is formatted properly.
- [ESLint](https://eslint.org/): A **static tool analyzer** to find and fix problems on TS/ JS code.
- [Prettier](https://prettier.io/): An opinionated **code formatter** used with ESLint to ensure some code conventions.
- [Github Actions](https://docs.github.com/en/actions):
    - We have a pipeline setting that allows us to perform unit and end-to-end tests every time we open a PR or push something to the master/main branch. This pipeline is an important step of our development workflow that you can found [here](https://pagaleve.atlassian.net/l/c/ayt516iX).
- [Shared-backend-library](https://github.com/pagaleve/shared-backend-library)
    - That's our library for common code used across our microservices built with [GitHub Packages](https://docs.github.com/en/packages). In order to install it you should add a .npmrc file in the project's root folder with the following content:
```bash
   registry=https://npm.pkg.github.com/pagaleve
   //npm.pkg.github.com/:_authToken={auth_token}
```
- [Swagger](https://swagger.io/)
    - We use swagger to document our APIs, swagger offers the most powerful and easiest to use tools to take full advantage of the [OpenAPI Specification](https://swagger.io/specification/).
    - As long as we are using Nestjs, it autogenerates a JSON that contains all our API documentation.
- [Docker](https://www.docker.com/)
    - We have the Dockerfile and docker-compose.yml files to help us run our microservices locally using the serverless framework offline plugin, but in most cases to have a more production close scenario, we prefer to deploy our environment and test it in the cloud.
- Envs:
    - Most of the time our microservices will need at least the following environments:
        - STAGE = your own developer stage
        - AWS_REGION = us-east-1
        - AWS_ACCESS_KEY_ID = your own access key
        - AWS_SECRET_ACCESS_KEY = your own access key

## License

None.
