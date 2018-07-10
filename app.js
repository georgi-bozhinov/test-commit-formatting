const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Stuff");
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.listen(8000, () => {
  console.log("Listening on port 3000");
});

module.exports = app;
