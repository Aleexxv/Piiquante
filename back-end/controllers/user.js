const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User =  require('../models/User');
require('dotenv').config();


exports.signUp = (req, res, next) => {
    const saltRounds = 10;
    let password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    });
};

// process.env.SALT_ROUNDS = 10


exports.logIn = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ error });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return error => res.status(401).json({ error: error });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id},
                    'ERTG_OUIU_FYKB_FTYI',
                    { expiresIn: '24h'}
                )
            });
        })
        .catch (error => res.status(500).json({ error: error }));
    })
    .catch (error => res.status(500).json({ error: error }));
};