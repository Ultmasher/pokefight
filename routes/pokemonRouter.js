import express from 'express';
import { getPokemons, getPokemon_id, infoPokemon } from '../controllers/pokemonController.js'

const pokemonRouter = express.Router();

pokemonRouter.get('/:info', infoPokemon);
pokemonRouter.get('/:id', getPokemon_id);
pokemonRouter.get('/', getPokemons);

export default pokemonRouter;