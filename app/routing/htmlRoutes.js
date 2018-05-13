var path = require('path');

// Basic route to send user to Survey page

module.exports = function(app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

};
// Default route that send everyone to home.html