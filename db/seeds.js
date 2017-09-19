require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Note = require('../models/note');
var Project = require('../models/project');
var User = require('../models/user');

Note.remove({}, (err) => console.log(err));
Project.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));


// Use native promises
mongoose.Promise = global.Promise;
// USER: JCHurley95

    // START JCHurley95 Note 1
        const note1 = new Note ({
            title: 'Ideas for computer desk',
            content: 'Put a piano hinge on the bottom side of the drawer face, make the inside lip a ruler using the hinge as a guide.'
        });
    // END JCHurley95 Note 1
    // START JCHurley95 Note 2
        const note2 = new Note ({
            title: 'Start recycling using a smelting forge',
            content: 'Recycle aluminum cans by melting them down in a DIY forge. Just need a proper plant pot with a hole in it, pvc pipe, and already have the heat gun. Pretty simple to make and pretty Dad has worked with one before.'
        });
    // END JCHurley95 Note 2

    // START JCHurley95 Project 1
        const outdoorTableProject = new Project ({
            name: 'Outdoor Table',
            imageURL: './images/outdoorTable', // Edit once the real image is in the images file
            pieceLengths: [12, 12, 36, 36, 24, 24, 36, 36, 38, 38]
        });
    // END JCHurley95 Project 1
    // START JCHurley95 Project 2
        // PROJECT 2 OUTDOOR CHAIR
        const indoorTableProject = new Project ({
            name: 'Indoor Table',
            imageURL: './images/outdoorTable', // Edit once the real image is in the images file
            pieceLengths: [12, 12, 24, 24, 24, 24, 36, 36, 42, 42]
        });
    //END JCHurley95 Project 2

const JHurleyUser = new User ({
    firstName: "Joey",
    lastName: "Hurley",	
    userName: 'JCHurley95',
    password: 'badasskittens',
    company: 'ScrewLooseCarpentry',
    projects: [outdoorTableProject, indoorTableProject],
    notes: [note1, note2]
});

// END User: JCHurley95


note1.save().then(() => console.log("note1 Saved!"));
note2.save().then(() => console.log("note2 Saved!"));
indoorTableProject.save().then(() => console.log("indoorTableProject Saved!"));
outdoorTableProject.save().then(() => console.log("outdoorTableProject Saved!"));
JHurleyUser.save().then(() => console.log("JHurleyUser Saved!"));
