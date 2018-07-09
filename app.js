const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Stuff");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports = app;
