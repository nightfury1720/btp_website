const mongoose = require('mongoose');
const question = require('../models/question.js');
const users = require('../models/user.js');
const login = async (req, res) => {
    const data = req.body;
    console.log(data); 
    try {
        const user = await users.findOneAndUpdate(
            {
                email: data.email,
            },
            {
                "$set": {
                    lastLogin: new Date(),
                    name: data.name,
                    photo: data.imageUrl
                }
            },
            {
                returnOriginal: false,
                upsert: true
            }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json("Error");
    }
}
module.exports = { login };