import pool from 'pool';
import pokeData from "../data/pokeData.json" with { type: "json" };

export const getPokemons = (req, res) => {
    const pokemons = pokeData.pokemons;
    res.status(200).json(pokemons);
}

export const getPokemon_id = (req, res) => {
    const id = parseInt(req.params.id);
    const pokemons = pokeData.pokemons;
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    if (pokemon) {
        res.status(200).json(pokemon);
    } else {
        res.status(404).json({ message: "Pokemon not found" });
    }
}

export const infoPokemon = (req, res) => {
    const id = parseInt(req.params.id);
    const info = req.params.info;
    const pokemons = pokeData.pokemons;
    const pokemon = pokemons.find(pokemon => pokemon.id === id);

    if (pokemon) {
        let result;
        switch (info) {
            case 'name':
                result = pokemon.name;
                break;
            case 'type':
                result = pokemon.type;
                break;
            case 'base':
                result = pokemon.base;
                break;
            default:
                result = null;
                break;
        }

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Invalid information requested" });
        }
    } else {
        res.status(404).json({ message: "Pokemon not found" });
    }
}