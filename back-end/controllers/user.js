const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const User =  require('../models/User');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
            const user = new User ({
                email: req.body.email,
                password: hash
            });
            console.log(user);
        user.save()
        .then(() => res.status(201).json({ message: 'utilisateur crée !'}))
        .catch (error => res.status(500).json({ error }));
    });
};

exports.logIn = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json(console.log('Utilisateur non trouvé'));
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json(console.log('mot de passe non trouvé'));
            }
            res.status(200).json({
                userId: user._id,
                token: 'TOKEN'
            });
        })
        .catch(res.status(500).json(console.log('token indéfini !')));
    })
    .catch (res.status(500).json(console.log('logIn Impossible !')));
};

// jwt.sign(
//     { userId: user._id},
//     'ERTG_OUIU_FYKB_FTYI',
//     { expiresIn: '24h'}
// )