//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();

// Set port
var PORT = process.env.PORT || 8080;

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

//Require routes
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

//Connect port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
