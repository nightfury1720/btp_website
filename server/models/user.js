const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String,
    photo: String,
    linkedIn: String,
    twitter: String,
    facebook: String,
    description: String,
    answers: [String],
    questions: [String],
    lastLogin: {
        type: Date,
        default: new Date()
    },
    description: String
});

// Model
const user = mongoose.model('users', userSchema);

module.exports = user;