const express = require('express');
const User = require('../models/user');
const Project = require('../models/project');
const router = express.Router();

// INDEX
router.get("/", (req,res) => {
  User.find().then(users => {
    res.json(users);
  })
});

//SHOW
router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((users) => {
    res.json(users);
  });
});

//DELETE
router.delete("/:userId/project/:projectId", (req, res) => {
  console.log(req.params);
  Project.find()
  User.findById(req.params.userId).then(user => {
    const newProjects = user.projects.filter(project => {
      return project.id !== req.params.projectId
    });
    console.log(newProjects);
    user.projects = newProjects;
    return user.save();
  })
  .then((project) => {
    console.log(project);
    res.send("Successfully Deleted");
  })
  .catch(err => console.log(err))
})

module.exports = router;