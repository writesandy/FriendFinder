let friends = require("../data/friends.js")

module.exports = function(app) {
    

// Displays all friends

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// Displays a single friend or returns false

app.get("/api/friends/:friends", function(req, res) {
    var chosen = req.params.friends;

    // console.log(friends);

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

};