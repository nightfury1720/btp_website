const express = require('express');
const { getAllPosts, postQuestion, answerquestion, updateUserDetail } = require('../Controller/posts.js');
const { login } = require('../Controller/login.js');
const router = express.Router();

router.get('/', getAllPosts);
router.post('/question', postQuestion);
router.post('/answer', answerquestion);
router.post('/login', login);
router.post('/updateUserDetail', updateUserDetail);
module.exports = router;