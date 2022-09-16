const express = require("express");
const coordinatesController = require("../controllers/coordinates/randomCoordinatesController");

const router = express.Router();
router.get("/random", coordinatesController.generateRandomCoordinates);

module.exports = router;
