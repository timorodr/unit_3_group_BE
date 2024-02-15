//DEPENEDENCIES
const mongoose = require("./connection");

//SCHEMA & MODEL
const { Schema, model } = mongoose;

const BookmarkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const Bookmark = model("Bookmark", BookmarkSchema);

module.exports = Bookmark;
