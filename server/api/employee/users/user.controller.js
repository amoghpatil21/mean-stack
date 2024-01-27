const { json } = require('express');
const UserModel = require('./user.model');

exports.registerUser = async (req, res, next) => {
    try {
        const existingsUser = await UserModel.findOne({ email: req.body.email });
        if (existingsUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        } else {
            const newUser = new UserModel({ email: req.body.email, password: req.body.password });
            const result = await newUser.save();
            res.status(201).json({ message: 'User successfully registered' });
        }
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const existingsUser = await UserModel.findOne({ email: req.body.email, password: req.body.password });
        if (existingsUser) {
            return res.status(200).json({
                message: 'authorized user'
            });
        } else {
            res.status(401).json({ message: 'unauthorized user' });
        }
        
    } catch (error) {
        res.status(500),json({
            error: error
        });
    }
}