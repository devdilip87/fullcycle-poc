# Cars API and GraphQL Server

This project demonstrates a simple Cars API server and a GraphQL server that fetches data from the API.

## Project Structure

The project is divided into two main directories:

- `api-server`: Contains the API server that serves the list of cars.
- `graphql-server`: Contains the GraphQL server that fetches data from the API server.

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/cars-api-graphql.git


2. Change to the project directory:

cd cars-api-graphql


3. Install the required dependencies:

npm install


## Running the Servers

1. Start the API server:

node api-server/server.js


2. Start the GraphQL server:

node graphql-server/server.js


The API server will be running at `http://localhost:3000`, and the GraphQL server will be running at `http://localhost:4000/graphql`.

## Usage

You can access the list of cars at `http://localhost:3000/api/cars` and use the following GraphQL query to fetch the list of cars from the GraphQL server:

{ cars { id make model year } }