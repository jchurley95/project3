const express = require('express');
const Note = require('../models/note');
const router = express.Router({mergeParams: true});

//INDEX
router.get("/", (req,res) => {
  Note.find().then(notes => {
    res.json(notes);
  })
});

//SHOW NOTE
router.get("/:id", (req,res) => {
  Note.findById(req.params.id).then((note) => {
    res.json(note);
  });
});

module.exports = router;