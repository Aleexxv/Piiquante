const Sauce =  require('../models/Sauce');
const Like =  require('../models/Like');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    // console.log(sauceObject);
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    console.log(sauce);
    sauce.save()
    .then(() => res.status(201).json(console.log('Sauce créée ! ')))
    .catch(error => res.status(400).json({ error }));
};

// exports.likeSauce = (req, res, next) => {
//     Sauce.findOne({ _id: req.params.id})
//     .then( sauce => {
//         sauce = Sauce.updateOne({

//         })
//         res.status(200).json({ message: 'likes ok !' });
//     })
//     .catch(() => res.status(400).json({ message: 'Like rater !' }));
// };

exports.likeSauce = async (req, res, next) => {
    Sauce.findOne({ _id:req.params._id })
    try{
        const liked = req.body.like;
        const usersLikedId = req.body.userId
        console.log(likes);
        console.log(usersLiked);
        Sauce.updateOne({ 
            likes: liked,
            usersLiked: usersLikedId
        });
        res.status(200).json({ message: 'Like ok !' })
    } catch (error) {
        return res.status(400).json({ error });
    }
};

exports.getAllSauce = async (req, res, next) => {
    try{
        const sauce = await Sauce.find();
        return res.status(200).json(sauce);
    } catch (error) {
    return res.status(400).json({ error });
    };
};

exports.getOneSauce = async (req, res, next) => {
    try{
        const sauce = await Sauce.findOne({ _id: req.params.id });
        return res.status(200).json(sauce);
    } catch (error) {
    return res.status(400).json({ error });
    };
};

exports.modifySauce = async (req, res, next) => {
    const sauceModifyObject = req.file ?
    {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    try{
        const updateSauce = await Sauce.updateOne({ _id: req.params.id }, { ...sauceModifyObject, _id: req.params.id });
        res.status(200).json(updateSauce);
    } catch (error) {
    return res.status(400).json({ error });
    };
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id})
    .then (sauce =>{
        const filename =  sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            Sauce.deleteOne({  _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
            .catch(error => res.status(500).json({ error }));
        });
    })
    .catch(error => res.status(500).json({ error }));
};
