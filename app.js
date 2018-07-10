const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Stuff");
});

app.get("/login", (req, res) => {
  res.send("Login");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
