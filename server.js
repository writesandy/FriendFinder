// Required packages

const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const friends = require('./app/data/friends.js')


// console.log(friends);

// Set up Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
module.exports = app