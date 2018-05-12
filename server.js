// Required packages

const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const friends = require('./app/data/friends.js')

console.log(friends);

// Set up Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


// Displays all charachters

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// Displays a single friend or returns false

app.get("/api/friends/:friends", function(req, res) {
    var chosen = req.params.friends;

    console.log(friends);

    for (var i=0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
            return res.json(friends[i]);
        }
    }

    return res.json(false);

});

// Create New Friends - takes in JSON input

app.post("/api/friends", function(req, res) {

    var newfriend = req.body;
    console.log(newfriend);
    friends.push(newfriend);
    res.json(newfriend);

});



// Starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
