// Required packages

const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');

// Set up Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Friends (also in /app/data/friends.js)

let friends = [
{
    "name": "Sandra",
    "photo": "https://www.facebook.com/photo.php?fbid=10157415563609676&l=e4bde4ee99",
    "scores": [
        5,
        5,
        2,
        1,
        3,
        4,
        5,
        3,
        5,
        2,
    ]
}]

// Route sending user to survey

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
  
