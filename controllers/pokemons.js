import pool from 'pool';

export const getPokemons = (req, res) => {
    pool.query('SELECT * FROM pokemons', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

export const getPokemon_id = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM pokemons WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

export const infoPokemon = (req, res) => {
    const id = parseInt(req.params.id);
    const info = req.params.info;
    pool.query('SELECT $1 FROM pokemons WHERE id = $2', [info, id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}