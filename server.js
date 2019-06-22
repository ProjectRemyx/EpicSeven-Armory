const express = require('express'); //Routing
const mongoose = require('mongoose'); //ORM
const bodyParser = require('body-parser'); //Get data from requests
const path = require('path');

//Set up routes
const characters = require('./routes/api/characters'); //Character routes

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Db Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDb
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/characters', characters); //For anything going to /api/characters refers to the required file

//Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));