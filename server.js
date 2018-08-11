const express = require("express");
const bodyParser = require("body-parser");
const path = require("express-path");

// tells node to create an "express" server
let app = express();

// sets an initial port for the listener
let PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes for server "map" of how to respond when users visit or request data from various URLs
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});