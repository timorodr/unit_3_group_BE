//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const BookmarkRouter = require("./controllers/bookmarkroutes");

const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/bookmarks", BookmarkRouter);

//ROUTE
app.get("/", (req, res) => {
  res.send("This is the Bookmark'd App");
});

//SERVER LISTENER
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`I'm listening on port ${PORT}`);
});
