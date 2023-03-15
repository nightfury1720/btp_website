const mongoose = require('mongoose');
const question = require('../models/question.js');
const users = require('../models/user.js');
const answers = require('../models/answer.js');
const getPost = (req, res) => {
    res.send("Hello World!");
}

const postQuestion = async (req, res) => {
    const data = req.body;
    const newQuestion = new question(data);
    try {
        await newQuestion.save();
        await users.findByIdAndUpdate(newQuestion.postedBy._id, { $push: { questions: newQuestion._id } });
        res.status(200).json(1);
    } catch (error) {
        res.status(404).json(2);
    }
}

const getAllPosts = async (req, res) => {
    try {
        const questions = await question.find();
        const posts = [];
        for (let i = 0; i < questions.length; ++i) {
            for (let j = 0; j < questions[i].answersId.length; ++j) {
                const answer = await answers.findById(questions[i].answersId[j]);
                posts.push({ question: questions[i], answer: answer });
            }
            if (questions[i].answersId.length == 0) posts.push({ question: questions[i] });
        }
        // console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}

const answerquestion = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const genAns = { postedBy: data.user, questionId: data.questionId.id, description: data.answer };
        const newAnswer = new answers(genAns);
        await newAnswer.save();
        await question.findByIdAndUpdate(newAnswer.questionId, { $push: { answersId: newAnswer._id } });
        await users.findByIdAndUpdate(newAnswer.postedBy._id, { $push: { answers: newAnswer._id } });
        res.status(200).json(1);
    } catch (error) {
        console.log(error);
        res.status(404).json(2);
    }
}

const updateUserDetail = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const user = await users.findByIdAndUpdate(data.userId,
            {
                "$set": {
                    name: data.name,
                    description: data.description,
                }
            },
            {
                returnOriginal: false
            }
        );
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json("Error");
    }
}

module.exports = { getPost, postQuestion, answerquestion, getAllPosts, updateUserDetail };