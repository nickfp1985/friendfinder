// dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

// sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log("App is listening on " + PORT);
});