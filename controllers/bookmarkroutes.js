//DEPENDENCIES
const express = require("express");
const Bookmark = require("./../models/bookmarks");

const router = express.Router();

//ROUTES
// Index: Getting all bookmarks
router.get("/", async (req, res) => {
  try {
    res.json(await Bookmark.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create: Posting a new bookmark
router.post("/", async (req, res) => {
  try {
    res.json(await Bookmark.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete: Deleting a bookmark
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update: Updating a bookmark
router.put("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
