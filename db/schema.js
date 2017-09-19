var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const noteSchema = new Schema({
    title: String,
    content: String,
    created_at: Date,
    updated_at: Date
});

const projectSchema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    projectCost: Number,
    pieceLengths: [],
    cutPlan: [],
    totalStockBoardNeededThisProject: Number,
    created_at: Date,
    updated_at: Date
});

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    company: String,
    projects: [projectSchema],
    notes: [noteSchema],
    created_at: Date,
    updated_at: Date
});

noteSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});
projectSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});
userSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

const Note = mongoose.model('Note', noteSchema);
const Project = mongoose.model('Project', projectSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Note: Note,
    Project: Project,
    User: User
};