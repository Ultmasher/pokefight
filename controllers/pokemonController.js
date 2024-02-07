import pokeData from "../data/pokeData.json" assert { type: "json" };

export const getPokemons = async ( req, res) => {
    res.status(200).json(pokeData);
}

export const getPokemon_id = async (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokeData.find(pokemon => pokemon.id === id);
    if (pokemon) {
        res.status(200).json(pokemon);
    } else {
        res.status(404).json({ message: "Pokemon not found" });
    }
}

export const infoPokemon = (name, type, baseKey, baseValue) => {
    return pokeData.filter(pokemon => {
      return (name ? pokemon.name.english.toLowerCase() === name.toLowerCase() : true) &&
             (type ? pokemon.type.includes(type) : true) && (baseKey ? baseKey in pokemon.base : true) &&
             (baseKey && baseValue ? pokemon.base[baseKey] === baseValue : true);
             
    });
  };

export default { getPokemons, getPokemon_id, infoPokemon };