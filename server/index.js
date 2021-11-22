const mysql = require('mysql')
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const db = mysql.createConnection({
    user: 'Jonathan',
    host: 'localhost', 
    password: '',
    database: 'clustering',
})

app.get('/pokemons/:generation', function(req, res){
    const generation = req.params.generation;
    db.query(
        `SELECT p.id, p.name, t1.name as type1, t2.name as type2, p.total, p.HP, p.Attack, p.Defense, p.Sp_Atk, p.Sp_Def, p.Speed, p.Generation, p.Legendary
        FROM pokemon as p
        LEFT JOIN types as t1 ON p.Id_Type1 = t1.id
        LEFT JOIN types as t2 ON p.Id_Type2 = t2.id
        WHERE p.Generation = ?`,
        generation,
        (err, result) => {
            if (err){
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

app.get('/all-pokemons', function(req, res){
    db.query(
        `SELECT p.id, p.name, t1.name as type1, t2.name as type2, p.total, p.HP, p.Attack, p.Defense, p.Sp_Atk, p.Sp_Def, p.Speed, p.Generation, p.Legendary
        FROM pokemon as p
        LEFT JOIN types as t1 ON p.Id_Type1 = t1.id
        LEFT JOIN types as t2 ON p.Id_Type2 = t2.id`,
        (err, result) => {
            if (err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})



app.get('/types', function(req, res){
    db.query(
        'SELECT * FROM types',
        (err, result) => {
            if (err){
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

app.listen(3003)
