const express = require("express");

const app = express();

// Initialize server and related services
require("./startup/cors")(app);
require("./startup/prod")(app);
require("./startup/server")(app);
require("./startup/routes")(app);
