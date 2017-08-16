const express = require('express');
const Post = require('../models/post');
const router = express.Router({mergeParams: true});

//INDEX
router.get("/", (req,res) => {
  Post.find().then(posts => {
    res.json(posts);
  })
});

//SHOW POST
router.get("/:id", (req,res) => {
  Post.findById(req.params.id).then((posts) => {
    res.json(posts);
  });
});

module.exports = router;