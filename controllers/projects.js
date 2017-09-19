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

//SHOW PROJECT
router.get("/:id", (req,res) => {
  Project.findById(req.params.id).then((project) => {
    res.json(project);
  });
});

//Delete Project
// router.get("/:id", (req, res) => {
//   console.log('req.params in delete route in project controller is: ', req.params);
//   console.log('userID in controller is: ', req.params.userId)
//   User.findById(req.params.userId).then(user => {
//     const indexToDelete = user.projects.findIndex(project => {
//       return project.id !== req.params.id
//     });
//     user.projects.splice(indexToDelete, 1);
//     return user.save();
//   })
//   .then((project) => {
//     console.log(project);
//     res.send("Successfully Deleted");
//   })
//   .catch(err => console.log('ERROR in controller delete route', err))
// })



module.exports = router;