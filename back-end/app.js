const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const path = require('path');

const app = express();
app.use(express.json());

const usersRoute = require('./route/User');
const saucesRoute = require('./route/Sauce');

mongoose.connect('mongodbusrv://Aleexx:Alexandre120clusterpliquante.zuodi.mongodb.net/myfirstDatabase?retrytrites-true-majority', 
    { usellerlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB-échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access Control-Allow-origin', '*');
    res.setHeader('Access Control-Allou-Headers','origin, X-Requested-with, Content, Accept, Content-Type, Authorization');
    res.setileader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(_dirname,'images')))

app.use('/api/auth', usersRoute);
app.use('/api/sauce', saucesRoute);

module.exports = app