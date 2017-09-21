const express = require('express');
const Project = require('../models/project');
const User = require('../models/user');
const router = express.Router();

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
router.post("/", (req, res) => {
  const project = new Project();
  project.name = req.body.name
  project.description = req.body.description
  project.imageURL = req.body.imageURL
  project.projectCost = req.body.projectCost
  project.pieceLengths = req.body.pieceLengths
  project.cutPlan = req.body.cutPlan
  project.totalStockBoardNeededThisProject = req.body.totalStockBoardNeededThisProject,

  project.save()
  .then((project) => {
    console.log("Success!");
    res.json(project);
    res.redirect('/projects');
  })
  .catch((err) => console.log("Error saving project: " + err))
});

//UPDATE Project
router.put("/:id", (req, res) => {
  const project = req.body;
  Project.findOneAndUpdate({_id: req.params.id}, project).then((project) => {
    res.json(project);
  })
  .catch(err => console.log(err));
});
  

//DELETE Project
router.delete("/:id/delete", (req, res) => {
  Project.findByIdAndRemove(req.params.id).then((project) => {
    res.json(project);
  })
  .then(() => {
    res.send("Successfully Deleted");
    res.redirect('/');
  })
  .catch(err => console.log('ERROR in controller delete route', err))
})



module.exports = router;