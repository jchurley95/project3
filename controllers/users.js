const express = require('express');
const User = require('../models/user');
const Project = require('../models/project');
const Post = require('../models/post')
const router = express.Router();


	// Index GET /
  // Show GET /:id
  
	// New GET /new
  // Create POST /
  
	// Edit GET /:id/edit
  // Update PUT/PATCH /:id
  
	// Delete DELETE /:id


// INDEX of USERS
router.get("/", (req,res) => {
  User.find().then(users => {
    res.json(users);
  })
});

//SHOW USER
router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((users) => {
    res.json(users);
  });
});

// CREATE A USER
  // Create POST /
router.post("/", (req, res) => {
  const userIdToUpdate = req.params.userId;
  User.findById(userIdToUpdate)
    .then((user) => {
      console.log(req.body);
      const newProject = new Project(req.body);
      console.log("New Project is: " + newProject);
      user.projects.push(newProject);
      user.save();
      
    })
})

//CREATE A NEW PROJECT FOR THIS USER
// POST /new
router.post("/:userId/project", (req, res) => {
  const userIdToUpdate = req.params.userId;
  User.findById(userIdToUpdate)
    .then((user) => {
      console.log(req.body);
      const newProject = new Project(req.body);
      console.log("New Project is: " + newProject);
      user.projects.push(newProject);
      user.save();
      
    })
})


module.exports = router;