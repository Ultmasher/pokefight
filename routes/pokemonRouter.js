import express from 'express';
import { getPokemons, getPokemon_id, infoPokemon } from '../controllers/pokemonController.js'

const recipesRouter = express.Router();

recipesRouter.get('/', getPokemons);
recipesRouter.get('/:id', getPokemon_id);
recipesRouter.get('/:id/:info', infoPokemon)

export default pokemonRouter;