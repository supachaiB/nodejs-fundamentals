//example test -> public, profile
exports.public = (req, res) => {
    res.json({ message: 'anyone can access'});
};

exports.profile = (req, res) => {
    res.json({ message: 'protected profile'})
};

//
const User = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().limit(10);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


