# TASK:

Using node.js with an Express NPM component as the backend API framework, create a single API endpoint which will generate a number of randomly located geometry coordinates within a given boundary box and return coordinates as an array of lat/long dictionaries or named arrays.

Create a simple React.js based front end using the above API endpoint and plot the coordinates on a map. We use Mapbox as our mapping component, but you can use any of your preferred tools.

# SOLUTION

Created client (reacjs) using Bootstrap and standard CSS library to render responsive (mobile friendly) homepage. Layout of 2 containers (dataContainer, mapContaier) responsible for fetching random coordinates from API and rendering map and corresponding coordinates(markers). For the simplicity API will create 15 coordinates within the fixed boundary box and return them to the client (this functionality is server by a helper function generateCoordinates() in the /utils directory). Number of coordinates and the boundary box may be changed in the body request from client (it's not included in this demo). By clicking -> "Click here to fetch new coordinates from API" user receives new coordinates.

## ARCHITECTURE

Traditional CLIENT <-> SERVER approach.

SERVER => http://localhost:3030
CLIENT => http://localhost:3000

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

2. CLIENT

    - react.js
    - bootstrap v5
    - mapbox
    - axios
    - react-map-gl

## STARTING THE SYSTEM

Please cd into SERVER directory and run one of the following commands:

1. npm run server -> to start the SERVER (node/express) only
2. npm run client -> to start the CLIENT (reactjs) only
3. npm run dev -> to start full stack application (client + server)

## TESTING API USING POSTMAN

1. GET / http://localhost:3030/api/coordinates/random

# NEXT ITERATION CHANGES

1. Requests validation
2. Edge scenarios
3. Tests (client, server)
