//DEPENDENCIES
require("dotenv").config();
const express = require("express");

const app = express();

//MIDDLEWARE

//ROUTE
app.get("/", (req, res) => {
  res.send("This is the Bookmark'd App");
});

//SERVER LISTENER
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`I'm listening on port ${PORT}`);
});
