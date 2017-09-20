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

//CREATE Project
router.post("/", (req, res) => {
  const projectIdToUpdate = req.params.projectId;
  console.log(projectIdToUpdate);
  Project.findByIdAndUpdate(projectIdToUpdate)
    .then(project => {
      console.log("successfully updated project with " + projectIdToUpdate);
    })
    .catch(err => {
      console.log(err);
    })
});

//UPDATE Project
router.put("/:id", (req, res) => {
  
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