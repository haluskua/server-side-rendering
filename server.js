const express = require("express");
const hbs = require("express-handlebars");
const server = express();

server.use(express.static("public"));

server.engine("hbs", hbs({ defaultLayout: false }));
server.set("view engine", "hbs");

server.get("/", (req, res) => {
  const name = req.query.name || 'person';
  //   res.send("Welcome !!" + req.query.name + "!!!");
  //   `<h1>Welcome !! ${req.query.name} "!!!</h1><p>This is a website</p>`
  res.render('home', { name: name, fruits: ['banana', 'apple', 'orange', 'pineaple']});
});

module.exports = server;
