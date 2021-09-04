const Sauce =  require('../models/Sauce');

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    const sauce = new Sauce({
        ...sauceobject,
        ImageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce. Save()
    .then(() => res.status(201).json({ message: 'Sauce créés' }))
    .catch(error => res.status(400).json(( error )));
    };

exports.getAllsauce = async (reqres, next) => {
    try{
        const sauce = await Sauce.find();
        return res.status(200).json(sauce);
    } catch (error) {
    return res.status(490).json(( error));
    };
};

exports.getOneSauce = (req, res, next) => {

};

exports.modifySauce = (req, res, next) => {

};

exports.deleteSauce = (req, res, next) => {

};