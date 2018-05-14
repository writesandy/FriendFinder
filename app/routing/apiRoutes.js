var friends = require("../data/friends.js")

module.exports = function(app) {
    

// Displays all friends

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

// Create New Friends - takes in JSON input

app.post("/api/friends", function(req, res) {

    const bestFriend = {
        name: "",
        photo: "",
        diff: Infinity
    };

    var newfriend = req.body;
    var userScores = req.body.scores;
    // console.log(userScores);

    var totalDiff ;

    for (var i = 0; i<friends.length; i++) {
        totalDiff = 0;
        // console.log(friends[i].name);
        for (var j=0; j < friends[i].scores.length; j++ ){
            var currFriendScore = friends[i].scores[j];
            var currUserScore = userScores[j];
            totalDiff += Math.abs(parseInt(currUserScore)-parseInt(currFriendScore));
        }
       if (totalDiff <= bestFriend.diff){
           bestFriend.name = friends[i].name;
           bestFriend.photo = friends[i].photo;
           bestFriend.diff = totalDiff;
       } 
    }

     console.log(bestFriend);
    friends.push(newfriend);
    res.json(bestFriend);

});

};