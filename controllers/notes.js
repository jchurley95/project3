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

//CREATE Note
router.post("/", (req, res) => {
  const noteIdToUpdate = req.params.noteId;
  console.log(noteIdToUpdate);
  Note.findByIdAndUpdate(noteIdToUpdate)
    .then(note => {
      console.log("successfully updated note with " + noteIdToUpdate);
    })
    .catch(err => {
      console.log(err);
    })
});
  
//UPDATE Note
router.put("/:id", (req, res) => {
  
});

//DELETE Note
router.delete("/:id/delete", (req, res) => {
  Note.findByIdAndRemove(req.params.id).then((note) => {
    res.json(note);
  })
  .then(() => {
    res.send("Successfully Deleted");
  })
  .catch(err => console.log('ERROR in controller delete route', err))
})

module.exports = router;