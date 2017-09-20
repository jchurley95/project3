const express = require('express');
const Project = require('../models/project');
const User = require('../models/user');
const router = express.Router({mergeParams: true});

//INDEX
router.get("/", (req,res) => {
  Project.find().then(projects => {
    res.json(projects);
  })
});

//SHOW Project
router.get("/:id", (req,res) => {
  Project.findById(req.params.id).then((project) => {
    res.json(project);
  });
});

//Create Project
router.post("/:id", (req, res) => {
  console.log(req.body)
  const newProject = req.body;
  newProject.save();
});

//UPDATE Project
router.put("/:id", (req, res) => {
  const projectIdToUpdate = req.params.projectId;
  console.log(projectIdToUpdate);
  Project.findByIdAndUpdate(projectIdToUpdate)
    .then(project => {
      console.log("successfully updadted project with " + projectIdToUpdate);
    })
    .catch(err => {
      console.log(err);
    })
});
  

//DELETE Project
router.delete("/:id/delete", (req, res) => {
  Project.findByIdAndRemove(req.params.id).then((project) => {
    res.json(project);
  })
  .then(() => {
    res.send("Successfully Deleted");
  })
  .catch(err => console.log('ERROR in controller delete route', err))
})



module.exports = router;