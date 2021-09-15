const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User =  require('../models/User');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
            const user = new User ({
                email: req.body.email,
                password: hash
            });
            console.log('user', user);
        user.save()
        .then(() => res.status(201).json({ message: 'utilisateur crée !'}))
        .catch (error => res.status(500).json({ error: error }));
    });
};

exports.logIn = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ error });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            console.log(valid);
            if (!valid) {
                return error => res.status(401).json({ error: error });
            }
            res.status(200).json({
                userId: user._id,
                token: 'token'
            });
        })
        .catch (error => res.status(500).json({ error: error }));
    })
    .catch (error => res.status(500).json({ error: error }));
};

// jwt.sign(
//     { userId: user._id},
//     'ERTG_OUIU_FYKB_FTYI',
//     { expiresIn: '24h'}
// )