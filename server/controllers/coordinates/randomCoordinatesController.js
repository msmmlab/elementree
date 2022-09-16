const logger = require("../../utils/logger");

exports.generateRandomCoordinates = (req, res) => {
    logger.info("GET /api/coordinates/random controller triggered.");
    const coordinates = [{ long: 12313, lat: 5553 }];
    res.status(200).send(coordinates);
};
