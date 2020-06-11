var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
  let thing = req.params.thing.toLowerCase();
  res.render("love", {thing: thing});
});

app.get("/posts", (req, res) => {
  let posts =[
    {title: "Duwang is gud", author: "Martino"},
    {title: "Mayonez is also gud", author: "Felippe"},
    {title: "Green butter and kebabs bishes", author: "TanukiDaiChan"}
  ];
  res.render("posts", {posts: posts});
  
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!!");
});