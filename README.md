# entrevista-corrado
Resolucion de ejercicio para entrevista en Cliengo

## Installation

Install [NodeJs](https://nodejs.org/en/download/)

The package manager needed, npm, is installed with NodeJs.

## Check NodeJS and npm version

The NodeJS version needed is 10.19.0 or superior.

The npm version needed is 6.14.4 or superior.

```bash
node -v
```
```bash
npm -v
```

## Download dependencies

```bash
npm install
```

## Database

Use mongoDB to create a database for this API, in server.js you can modify the port and schema name (default schema name: creditCarddb and port: 27017).

## Run

To run the api execute the command 
```bash
npm start
```

## Endpoints

POST /creditCard

```bash
curl --location --request POST 'http://localhost:8080/creditCard' \
--header 'Content-Type: application/json' \
--data-raw '{
	"userId": "123456789",
  "cardToken": "dk3122dcvdd-44pp43zmn",
  "brandType": "visa",
  "maskedNumber": "******4111",
  "primary": true
}'
```

GET /creditCard

```bash
curl --location --request GET 'http://localhost:8080/creditCard?userId='

```


