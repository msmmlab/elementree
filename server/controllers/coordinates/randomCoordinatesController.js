const logger = require("../../utils/logger");
const generateCoordinates = require("../../utils/generateCoordintes");

exports.generateRandomCoordinates = (req, res) => {
    logger.info("GET /api/coordinates/random controller triggered.");

    // CONSTANT BOUNDARY BOX OR RECEIVED FROM REQUEST BODY
    const bottom = 151.26244;
    const left = -33.87854;
    const upper = 151.1265;
    const right = -33.96307;

    // NUMBER OF POINTS WE WANT TO CREATE
    const numberOfPoints = 7;

    // HELPER FUNCTION TO GENERATE RANDOM COORDINATES
    const coordinates = generateCoordinates(
        bottom,
        left,
        upper,
        right,
        numberOfPoints
    );

    res.status(200).send(coordinates);
};
