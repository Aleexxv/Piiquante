const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = JSON.parse(req.headers.authorization.split(' ')[1]);
        console.log(token);
        const decodedToken = jwt.verify(token, 'ERTG_OUIU_FYKB_FTYI');
        // console.log(decodedToken);
        const userId = decodedToken.userId;
        // console.log(userId);
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