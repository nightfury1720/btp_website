const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const answerSchema = new Schema({
    postedBy: Object,
    questionId: String,
    description: String,
    date: {
        type: Date,
        default: new Date()
    }
});

// Model
const answer = mongoose.model('answers', answerSchema);

module.exports = answer;