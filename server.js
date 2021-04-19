// TODO: visit https://expressjs.com/
const express = require('express')
const app = express()

const local_mongodb = 'mongodb://localhost:27017/whiteboard'
const remote_mongodb = 'mongodb+srv://yhe:i2T8t2zTa9YQewMY@cluster0.bdvgp.mongodb.net/whiteboard'
const mongoose = require('mongoose');
mongoose.connect(remote_mongodb,
    {useNewUrlParser: true, useUnifiedTopology: true});


// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

require('dotenv').config();
app.listen(process.env.PORT || 4000)