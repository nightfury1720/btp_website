const mongoose = require('mongoose');
const question = require('../models/question.js');
const users = require('../models/user.js');
const answers = require('../models/answer.js');


const answerquestion = async (req, res) => {
    const data = req.body;
    const newQuestion = new question(data);
    try {
        await newQuestion.save();
        await users.findByIdAndUpdate(newQuestion.userId, { $push: { questions: newQuestion._id } });
        res.status(200).json(1);
    } catch (error) {
        res.status(404).json(2);
    }
}

module.exports = { answerquestion };