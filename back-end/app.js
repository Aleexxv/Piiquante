const express = require('express');
const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);
const path = require('path');

const app = express();
app.use(express.json());

const userRoute = require('./routes/user')
const sauceRoute = require('./routes/sauce')

mongoose.connect('mongodb+srv://Aleexx:Alexandre12@clusterpiiquante.zuodi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers','origin, X-Requested-with, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname,'images')))

app.use('/api/auth', userRoute);
app.use('/api/sauces', sauceRoute);

module.exports = app