require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Post = require('../models/post');
var Project = require('../models/project');
var User = require('../models/user');

Post.remove({}, (err) => console.log(err));
Project.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));


// Use native promises
mongoose.Promise = global.Promise;
// USER: JCHurley95

    // START JCHurley95 Post 1
        const post1 = new Post ({
            title: 'Desperate For Work',
            content: 'Please, anybody, I am broke. (404)285-6677 @screwloosecarpentry on instagram'
        });
    // END JCHurley95 Post 1
    // START JCHurley95 Post 2
        const post2 = new Post ({
            title: 'Will Build Stuff For Food',
            content: 'Willing to trade beautiful works of art for lunch food, Ponce City is way too expensive'
        });
    // END JCHurley95 Post 2

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
    posts: [post1, post2]
});

// END User: JCHurley95

// // USER: RonSwanson

//     // START RonSwanson Post 1
//         const post3 = new Post ({
//             title: 'I Know More Than You',
//             content: 'Recently went to the local Home Department store. Employee asked me if I needed help. Lol.'
//         });
//     // END RonSwanson Post 1

//     // START RonSwanson Project 1
//         const chairProject = new Project ({
//             name: 'Chair',
//             imageURL: './images/outdoorTable', // Edit once the real image is in the images file
//             pieceLengths: [24, 24, 36, 36, 42, 42, 48, 48, 32, 32, 45, 45, 12, 12]
//         });
//     // END RonSwanson Project 1

// const RonSwansonUser = new User ({
//     firstName: "Ron",
//     lastName: "Swanson",	
//     userName: 'RonSwanson',
//     password: 'reallygoodpassword',
//     company: 'ReallyGoodWoodShop',
//     projects: [chairProject],
//     posts: [post3]
// });
// // END User: RonSwanson

post1.save().then(() => console.log("post1 Saved!"));
post2.save().then(() => console.log("post2 Saved!"));
indoorTableProject.save().then(() => console.log("indoorTableProject Saved!"));
outdoorTableProject.save().then(() => console.log("outdoorTableProject Saved!"));
JHurleyUser.save().then(() => console.log("JHurleyUser Saved!"));

// post3.save().then(() => console.log("post3 Saved!"));
// chairProject.save().then(() => console.log("chairProject Saved!"));
// RonSwansonUser.save().then(() => console.log("RonSwanson Saved!"));