const express = require('express');
const Project = require('../models/project');
const router = express.Router();

router.get("/", (req,res) => {
  Project.find().then(projects => {
    res.json(projects);
  })
});

router.get("/:id", (req,res) => {
  Project.findById(req.params.id).then((projects) => {
    res.json(projects);
  });
});

module.exports = router;