/**
 Helper function to create number of random coordinates within a given boundary box

 Accepted arguments:
    bottom,
    left,
    upper,
    right

    numberOfPoints -> number of points we want to generate

 */

const generateCoordinates = (bottom, left, upper, right, numberOfPoints) => {
    const randomGeoPoints = [];

    // GENERATE numberOfPoints RANDOM POINTS WITHIN THE GEO BOUNDARY
    for (let i = 0; i < numberOfPoints; i++) {
        const lat = (Math.random() * (right - left) + left).toFixed(5) * 1;
        const long = (Math.random() * (upper - bottom) + bottom).toFixed(5) * 1;
        const point = { long: long, lat: lat };

        randomGeoPoints.push(point);
    }

    return randomGeoPoints;
};

module.exports = generateCoordinates;
