## TASK:

Using node.js with an Express NPM component as the backend API framework, create a single API endpoint which will generate a number of randomly located geometry coordinates within a given boundary box and return coordinates as an array of lat/long dictionaries or named arrays.

Create a simple React.js based front end using the above API endpoint and plot the coordinates on a map. We use Mapbox as our mapping component, but you can use any of your preferred tools.

## ARCHITECTURE

Traditional CLIENT <-> SERVER approach.

## LIBRARIES USED

1. SERVER
    - express
    - nodemon
    - cors
    - helmet
    - compression
    - pino
    - pino-pretty
    - concurrently

## STARTING THE SYSTEM

Please cd into SERVER directory and run one of the following commands:

1. npm run server -> to start the SERVER (node/express) only
2. npm run client -> to start the CLIENT (reactjs) only
3. npm run dev -> to start full stack application (client + server)

## TESTING API USING POSTMAN

1. GET / http://localhost:3030/api/coordinates/random

## NEXT ITERATION CHANGES

1. Request validation
2. Edge scenarios
