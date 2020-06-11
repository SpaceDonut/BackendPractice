const express = require('express');
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  let query = req.query.search;
  request(`http://omdbapi.com/?s=${query}&apikey=thewdb`, (err, response, body) => {
    if(!err && response.statusCode == 200){
      console.log("body", body)
      let parsedBody = JSON.parse(body); 
      res.render("results", {data: parsedBody});
    } else {
      console.log("Error")
      res.redirect("/");
    }
  });
});

app.listen(3000, () => {
  console.log("Movie app started , listening on 3000!");
});