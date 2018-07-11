const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Stuff");
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.post("/home", (req, res) => {
  res.send("Writing to db...");
});

app.put("/home", (req, res) => {
  res.send("Updating db...");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
