const jwt = require('jsonwebtoken');
// require('dotenv').config();


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'ERTG_OUIU_FYKB_FTYI');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
        throw console.log('User ID non valide');
        } else {
        next();
        }
    } catch {
        res.status(401).json({
        error: new Error(console.log('requête invalide !'))
        });
    }
};

// process.env.JWT_SECRET_KEY = 'ERTG_OUIU_FYKB_FTYI';