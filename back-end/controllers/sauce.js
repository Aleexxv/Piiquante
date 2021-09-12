const Sauce =  require('../models/Sauce');

exports.createSauce = (req, res, next) => {
    const sauceObject = req.body.sauce;
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filname}`
    });
    console.log(sauce);
    sauce.save()
    .then(() => res.status(201).json({ message: 'Sauce créé !' }))
    .catch(error => res.status(400).json({ error }));
    };

exports.getAllSauce = async (req, res, next) => {
    try{
        const sauce = await Sauce.find();
        return res.status(200).json(sauce);
    } catch (error) {
    return res.status(400).json({ error });
    };
};

exports.getOneSauce = (req, res, next) => {

};

exports.modifySauce = (req, res, next) => {

};

exports.deleteSauce = (req, res, next) => {

};