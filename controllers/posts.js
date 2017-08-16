const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.get("/", (req,res) => {
  Post.find().then(posts => {
    res.json(posts);
  })
});

router.get("/:id", (req,res) => {
  Post.findById(req.params.id).then((posts) => {
    res.json(posts);
  });
});

module.exports = router;