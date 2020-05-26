const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hey , LISTEN!")
});

app.get("/bye", function(req, res){
    res.send("Hey , BYE!")
});

app.get("/dog", function(req, res){
    res.send("MEWO~")
});

app.get("/r/:subredditName", function(req, res){
    console.log(req.params);
    res.send(`WELCOME TO THE ${req.params.subredditName.toUpperCase()} SUBREDDIT!`);
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!")
});

app.get("*", function(req, res){
    res.send("Page doesn't exist! Must be the work of an enemy stand!")
});

app.listen(3000, function(){
    console.log("Server listening on port 3000!")
})