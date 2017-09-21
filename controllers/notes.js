const express = require('express');
const Note = require('../models/note');
const router = express.Router();

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

//CREATE Note
router.post("/", (req, res) => {
  const note = new Note();
  note.title = req.body.title;
  note.content = req.body.content;
  note.imageURL = req.body.imageURL;

  note.save()
    .then((note) => {
      console.log("Success!");
      res.json(note);
      res.redirect('/notes');
    })
    .catch(err => console.log("Error saving note: " + err));
});

//UPDATE Note
router.put("/:id", (req, res) => {
  const note = req.body;
  Note.findOneAndUpdate({_id: req.params.id}, note).then((note) => {
    res.json(note);
  })
  .catch((err) => {
    console.log("Error saving project: " + err)
  })
});

//DELETE Note
router.delete("/:id/delete", (req, res) => {
  Note.findByIdAndRemove(req.params.id).then((note) => {
    res.json(note);
  })
  .then(() => {
    res.send("Successfully Deleted");
    res.redirect('/');
  })
  .catch(err => console.log('ERROR in controller delete route', err))
})

module.exports = router;