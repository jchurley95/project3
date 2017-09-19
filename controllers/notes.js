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
  Post.findById(req.params.id).then((notes) => {
    res.json(notes);
  });
});

module.exports = router;