const db = require('database')

const getPokemons = (_req, res) => {
    db.query(
        `SELECT 
            p.name, p.id, p.type1_id, p.type2_id, p.hp,
            p.attack, p.defense, p.sp_atk, p.sp_def, p.speed, t.name
        FROM pokemons as p
            INNER JOIN types as t on p.type1_id 
        `,
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
}

const getPokemonsByGeneration = (req, res) => {
    const id = req.id;
    db.query(
        `SELECT 
            p.name, p.id, p.type1_id, p.type2_id, p.hp,
            p.attack, p.defense, p.sp_atk, p.sp_def, p.speed, t.name
        FROM pokemons as p 
            INNER JOIN types as t on p.type1_id
        WHERE p.generation = ?`,
        id,
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
}

module.exports = {
    getPokemons,
    getPokemonsByGeneration
}