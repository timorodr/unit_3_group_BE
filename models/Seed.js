//DEPENDENCIES
const express = require("express");
const Bookmark = require("./../models/bookmarks");
const mongoose = require("./connection");

//SEED ROUTE
mongoose.connection.on("open", async () => {
  try {
    await Bookmark.deleteMany({});
    await Bookmark.create([
      {
        title: "Anki - Powerful, intelligent flashcards",
        url: "https://apps.ankiweb.net/",
      },
      {
        title: "Google Fonts",
        url: "https://fonts.google.com/",
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/",
      },
      {
        title: "YouTube: Web Development with Alex Merced",
        url: "AlexMercedCoder",
      },
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/",
      },
      {
        title: "Major League Hacking",
        url: "https://mlh.io/",
      },
      {
        title: "jQuery Docs",
        url: "https://api.jquery.com/",
      },
      {
        title: "React Docs",
        url: "https://react.dev/learn",
      },
      {
        title: "HackerRank",
        url: "https://www.hackerrank.com/",
      },
      {
        title: "Coolors",
        url: "https://coolors.co/",
      },
      {
        title: "LeetCode",
        url: "https://leetcode.com/",
      },
    ]);
  } catch (err) {
    res.status(400).json(err);
  }
});
