const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/pokemons', controller.getPokemons)
router.get('/pokemons-by-generation', controller.getPokemonsByGeneration)

module.exports = router;