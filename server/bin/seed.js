var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tf-books");

var Book = require("../models/Book.js");
var Episode = require("../models/Episode.js");
var Guest = require("../models/Guest.js");

var allBooks = require("../../data/books.json");
var allEpisodes = require("../../data/episodes.json");
var allGuests = require("../../data/guests.json");

Book.insertMany(allBooks, (error, docs) => {
    if (error) console.log(error);
    else console.log("Success, " + docs.length + " docs inserted");
});

Episode.insertMany(allEpisodes, (error, docs) => {
    if (error) console.log(error);
    else console.log("Success, " + docs.length + " docs inserted");
});

Guest.insertMany(allGuests, (error, docs) => {
    if (error) console.log(error);
    else console.log("Success, " + docs.length + " docs inserted");
});