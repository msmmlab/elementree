const express = require("express");
const coordinatesRoutes = require("../routes/coordinatesRoutes");

module.exports = function (app) {
    app.use(express.json());
    app.use("/api/coordinates/", coordinatesRoutes);
};
