const express = require('express');
const router = express.Router();

//Character Model
const Character = require('../../models/Character');

//@route    GET api/characters
//@desc     Get all characters
//@access   Public
router.get('/', (req, res) => {
    Character.find()
        .sort({ power: -1})
        .then(characters => res.json(characters))
});

//@route    GET api/character
//@desc     Get single character
//@access   Public
router.get('/:id', (req, res) => {
    Character.findById(req.params.id)
        .then(character => res.json(character))
});

//@route    POST api/characters
//@desc     Create a character
//@access   Public
router.post('/', (req, res) => {
    const newCharacter = new Character({
        name: req.body.name,
        element: req.body.element,
        level: req.body.level,
        power: req.body.power,
    });  
    //Take the character and spit it out as a json
    newCharacter.save().then(character => res.json(character));
});

//@route    DELETE api/characters/:id
//@desc     Delete a character
//@access   Public
router.delete('/:id', (req, res) => {
    Character.findById(req.params.id)
        .then(character => character.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;