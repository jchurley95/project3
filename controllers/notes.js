const express = require('express');
const Note = require('../models/note');
const router = express.Router({mergeParams: true});

//INDEX
router.get("/", (req,res) => {
  Note.find().then(notes => {
    res.json(notes);
  })
});

//SHOW POST
router.get("/:id", (req,res) => {
  res.json(Note.findById(req.params.id))
});

module.exports = router;