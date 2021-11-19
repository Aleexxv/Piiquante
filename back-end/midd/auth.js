const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
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

// process.env.JWT_SECRET = 'ERTG_OUIU_FYKB_FTYI';