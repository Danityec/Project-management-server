
const {Schema, model} = require('mysql');

const commentSchema = new Schema({
    comment: {type: String, require: true},
    time: {type: date},
    img: {type: Array},  
});


const projectSchema = new Schema({
    name: {type: String, require: true},
    websiteAdress: {type: String},
    img: {type: Array},  
    status: {type: Array},
    date: {type: Date},
    comment: [commentSchema],
}, {collection: 'projects'});

const Project = model('Project', projectSchema);

module.exports = Project
