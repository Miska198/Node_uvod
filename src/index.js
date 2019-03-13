const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Kontaktujte mě na mickey.mouse@email.com");
});

app.get("/hobbies", function(req, res) {
  res.send("lyzovani!!!!!!, archery!!! <3");
});

app.get("/about", function(req, res) {
  res.send("idk what....");
});

app.get("/calc", function(req, res) {
  var formular = "<form action='/calc' method='post'>";
  formular += "<input type='text' name='num1' placeholder='První číslo' />";
  formular += "<input type='text' name='num2' placeholder='Druhý číslo' />";
  formular += "<button type='submit' name='submit'>Kalkuluj!</button>";
  formular += "</form>";
  res.send(formular);
});

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
