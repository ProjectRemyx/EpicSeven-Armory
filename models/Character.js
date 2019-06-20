//Db Models
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const characterSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    power:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Character = mongoose.model('character', characterSchema);