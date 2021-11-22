import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [generation, setGeneration] = useState(0);
    const [type, setType] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(async() => {
        let response = await axios.get('http://localhost:3003/types');
        setTypes(response.data);
    }, [])

    const handleSubmit = async(event) => {
        event.preventDefault();
        let response = {};
        console.log(generation)
        console.log(typeof(generation))
        if (parseInt(generation) === 0) {
            console.log('gen==0')
            response = await axios.get('http://localhost:3003/all-pokemons')
            console.log(response)
        }
        else{
            console.log('gen!==0')
            response = await axios.get(`http://localhost:3003/pokemons/${generation}`);
        }
        setPokemons(response.data)
        console.log(response);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Choose pokemon generation : 
                    <select onChange={(e) => setGeneration(e.target.value)}>
                        <option value={0}>All</option>
                        <option value={1}>Generation 1</option>
                        <option value={2}>Generation 2</option>
                        <option value={3}>Generation 3</option>
                        <option value={4}>Generation 4</option>
                        <option value={5}>Generation 5</option>
                        <option value={6}>Generation 6</option>
                    </select>
                </label>
                <label>Choose pokemon type : 
                    <select onChange={(e) => setType(e.target.value)}>
                        {types.map(type => {
                            return(
                                <option value={type.id}>{type.name}</option>
                            )
                        })}
                    </select>
                </label>
                <input type="submit"/>
            </form>
            <ul>
                {pokemons.map(pokemon => {
                    return(
                        <li>{pokemon.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
