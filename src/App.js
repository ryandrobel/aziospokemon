import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';


function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(response => {
        console.log(response)
        setPokemon(response.data.results)})
      .catch(error => console.log(error))
  }

  return (
    <div>
    <div className="App container bg-danger m-5 p-5 rounded">
      <div className="row">
      </div>
      <button className="btn btn-warning btn-lg " onClick={fetchPokemon}>Fetch Pokemon</button>
      <div className="col-8 text-left">
      </div>
    </div>

    
      {
      pokemon.map((pokemon, index) => {
        return(
        <div className="name" key={index} name={pokemon.name}>
          <h1 className="text-center">{pokemon.name}</h1>
        </div>
      );
      })
      }
  
    </div>
  );
}

export default App;
